import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface Todo {
  title: string
  text: string
  bgColor: string
  id: string
  completed: boolean
  date?: Date
}

export interface Sort {
  text: string
  value: string
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  stream$: Subject<Todo[]> = new Subject<Todo[]>()
  todoArr: Todo[] = (JSON.parse(localStorage.getItem('todoArr')) === null) ? [] : JSON.parse(localStorage.getItem('todoArr'))

  public sortArr: Sort[] = [
    {text: 'По дате создания', value: 'date'},
    {text: 'По алфавиту', value: 'title'},
    {text: 'Выполненые', value: 'true'},
    {text: 'Не выполненые', value: 'false'}
  ]
  


  todoArrSave() {
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr))
  }

  getId(id: string) {
    return this.todoArr.find( item => item.id === id)
  }

  replaceTodoArr() {
    const copy: Todo[] = this.todoArr.map(todo => {
      return Object.assign({}, todo)
    })
    this.todoArr = copy
  }

  savingState() {
    this.todoArrSave() 
    this.replaceTodoArr()
    this.stream$.next(this.todoArr)
  }

  todoCompletedChange(todo: Todo) {
    todo.completed = !todo.completed
    if (todo.completed === false) {
      todo.bgColor = '#c73442'
    } else 
    if (todo.completed === true) {
      todo.bgColor = '#739F3D'
    }
    this.savingState()
  }

  addTodo(todo: Todo) {
    todo.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    todo.completed = false;
    todo.date = new Date();
    todo.bgColor = "#c73442"
    this.todoArr.unshift(todo)
    this.savingState()
  } 

  deleteTodo(todo: Todo) {
    this.todoArr.forEach((item, i) => {
      if (item === todo) {
        this.todoArr.splice(i,1)
      }
    })
    this.savingState()
  }

}
