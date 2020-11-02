
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { Todo, TodoService } from '../service/todo.service';
import { ModalDirective } from '../directives/modal.directive'
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { ModalDeleteDirective } from '../directives/modal-delete.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy { 

  sub: Subscription

  todoArr: Todo[]
  todo: Todo 

  id: string

  check: boolean = true

  @ViewChild(ModalDirective, {static: false}) refDirModal: ModalDirective
  @ViewChild(ModalDeleteDirective, {static: false}) refDirDelete: ModalDeleteDirective

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private routeR: Router,
    public todoService: TodoService,
  ) {}


  ngOnInit(): void {

    this.route.params.subscribe( (params: Params) => {
      this.id = params.id
      this.todo = this.todoService.getId(params.id) 
      if (!this.todo) {
        this.check = false
        this.routeR.navigate(['error']) 
      }
    })     

    this.sub = this.todoService.stream$.subscribe(() => {
      this.todo = this.todoService.getId(this.id) 
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    const component = this.refDirModal.containerRef.createComponent(modalFactory)

    component.instance.title = this.todo.title
    component.instance.text = this.todo.text
    component.instance.close.subscribe(() => {
      this.refDirModal.containerRef.clear()  
    })
    component.instance.updateTodo.subscribe((arg: any) => {
      this.todo.title = arg[0]
      this.todo.text = arg[1]
      this.todoService.savingState()
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

  deleteTodo() {
    this.routeR.navigate(['/']) 
    this.todoService.deleteTodo(this.todo) 
  }

  copmlete() {
    this.todoService.todoCompletedChange(this.todo)
  }


}
