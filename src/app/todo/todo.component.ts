
import { Component, ComponentFactoryResolver, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { PageStatus } from '../service/pageStatus.service';
import { Todo, TodoService } from '../service/todo.service';
import { ModalDirective } from '../directives/modal.directive'
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalDeleteDirective } from '../directives/modal-delete.directive';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit { 

  todo: Todo 
  check: boolean = true
  @ViewChild(ModalDirective, {static: false}) refDirModal: ModalDirective
  @ViewChild(ModalDeleteDirective, {static: false}) refDirDelete: ModalDeleteDirective

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private routeR: Router,
    public todoService: TodoService,
    public pageStatusService: PageStatus  
  ) {}

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    console.log('modalFactory showmodal', modalFactory);
    const component = this.refDirModal.containerRef.createComponent(modalFactory)

    component.instance.title = this.todo.title
    component.instance.text = this.todo.text
    component.instance.close.subscribe(() => {
      this.refDirModal.containerRef.clear()  
    })
    component.instance.updateTodo.subscribe((arg: any) => {
      this.todo.title = arg[0]
      this.todo.text = arg[1]
    }) 
  }

  showModalDelete() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalDeleteComponent)
    const component = this.refDirDelete.containerRef.createComponent(modalFactory)
    
    component.instance.close.subscribe(() => {
      this.refDirDelete.containerRef.clear()
    })

    component.instance.delete.subscribe(() => {
      this.deleteTodo()
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.todo = this.todoService.getId(params.id) 
      if (!this.todo) {
        this.check = false
        this.routeR.navigate(['error']) 
      }
    })     
  }

  deleteTodo() {
    this.routeR.navigate(['/']) 
    this.todoService.deleteTodo(this.todo)
  }

  copmlete() {
    this.todoService.todoCompletedChange(this.todo)
  }

}
