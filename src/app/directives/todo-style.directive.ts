import { Directive, DoCheck, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTodoStyle]'
})

export class TodoStyleDirective implements DoCheck{

  @Input() bg: string = '#fff'
  @Input('area') textArea: string 

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}


  ngDoCheck(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.bg);
  }

}
