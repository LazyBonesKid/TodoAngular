import { Directive, DoCheck, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Directive({
  selector: '[appTodoStyle]'
})

export class TodoStyleDirective implements OnInit, DoCheck {

  @Input() bg: string


  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.bg);
  }

  ngDoCheck() {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.bg);
  }
}
