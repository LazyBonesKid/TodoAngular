import { Component, DoCheck, OnInit } from '@angular/core';
import { PageStatus } from './service/pageStatus.service';
import { Sort, Todo, TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Todo'; 

  todoArr: Todo[]
  sortArr: Sort[] 



  constructor(
    public todoService : TodoService,
    public pageStatusService: PageStatus    
  ) {}
  
  ngDoCheck(): void {
    this.todoService.todoArrSave()  
  }

  search: string  

  ngOnInit(): void {   
    this.todoArr = this.todoService.getData()   
    this.sortArr = this.todoService.sortArr     
  }

}
