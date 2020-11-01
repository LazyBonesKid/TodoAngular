import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../service/todo.service';

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {

  transform(todoArr: Todo[],input: string = ''): Todo[] {
    if (!input.trim()) {
      return todoArr
    } else {
      return todoArr.filter(todo => {
        return todo.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      })
    }
  }

}
