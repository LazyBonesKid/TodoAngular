import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoService } from '../service/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
}) 
export class AddComponent implements OnInit {

  form: FormGroup 
  todoArr: Todo[]

  constructor(
    private todoService: TodoService  
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    const todoData: Todo = this.form.value
    this.todoService.addTodo(todoData)
    this.form.reset()
  } 

}
