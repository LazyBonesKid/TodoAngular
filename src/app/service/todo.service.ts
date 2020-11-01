import { DoCheck, Injectable, OnInit } from '@angular/core';


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

  public todoArr: Todo[] = (JSON.parse(localStorage.getItem('todoArr')) === null) ? [] : JSON.parse(localStorage.getItem('todoArr'))

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

  getData() {
    return this.todoArr
  }

  todoCompletedChange(todo: Todo) {
    todo.completed = !todo.completed

    if (todo.completed === false) {
      todo.bgColor = '#c73442'
    } else 
    if (todo.completed === true) {
      todo.bgColor = '#739F3D'
    }
  }

  addTodo(todo: Todo) {
    todo.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    todo.completed = false;
    todo.date = new Date();
    todo.bgColor = "#c73442"
    this.todoArr.unshift(todo)
  } 

  deleteTodo(todo: Todo) {
    console.log('deleteTodo');
    this.todoArr.forEach((item, i) => {
      if (item === todo) {
        this.todoArr.splice(i,1)
      }
    })

  }


}
