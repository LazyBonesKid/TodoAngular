import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalDelete]'
})
export class ModalDeleteDirective {

  constructor(
    public containerRef: ViewContainerRef
  ) {}

}
