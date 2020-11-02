import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../service/todo.service';

@Pipe({
  name: 'sort',
  pure: true
})

export class SortPipe implements PipeTransform {

  transform(todoArr: Todo[], sett: string): Todo[] {
    if (sett === '') {
      return todoArr
    } else 
    if (sett === 'true' || sett === 'false') { 
      todoArr = todoArr.filter(todo => {
        return todo.completed.toString() === sett
      })
      return todoArr
    } else if (sett === 'date') {
      todoArr.sort( (a: Todo, b: Todo) => {
        if (a[sett] < b[sett]) return 1;
        if (a[sett] === b[sett]) return 0;
        if (a[sett] > b[sett]) return -1;
      })
      return todoArr
    } else 
    if (sett === 'title') {
      todoArr.sort( (a: Todo, b: Todo) => {
        if (a[sett] > b[sett]) return 1;
        if (a[sett] === b[sett]) return 0;
        if (a[sett] < b[sett]) return -1;
      })
      return todoArr
    }
  }

}
