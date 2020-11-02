import { Component, OnInit } from '@angular/core';
import { Sort, Todo, TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  constructor(
    public todoService : TodoService, 
  ) {}

  ngOnInit(): void {   
    this.todoService.stream$.subscribe(Arr => {
      this.todoArr = Arr
    })
    this.todoArr = this.todoService.todoArr
    this.sortArr = this.todoService.sortArr  
  }

  todoArr: Todo[]  
  sortArr: Sort[] 

  menuStatus: boolean = false
  sortStatus: boolean = true 
  modalStatus: boolean = false 

  settValue: string = 'date'
  searchInput: string = ''

  settChange(event: any) {
    const target = event.target
    const currentLi = target.closest('li')
    const ul  = target.closest('ul')
    const liArray = [...ul.children]
    liArray.forEach(li => {
      const i = li.querySelector('i')
      if (li === currentLi) {
        const div = li.querySelector('div')
        const sett = div.getAttribute('id')
        this.settValue = sett
        i.classList.add('active')
      } else {
        i.classList.remove('active')
      }
    })
  }

}
