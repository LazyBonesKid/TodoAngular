import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string
  @Input() text: string
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  @Output() updateTodo: EventEmitter<any> = new EventEmitter<void>()
  

  save() {
    const arg = [this.title, this.text] 
    this.updateTodo.emit(arg) 
  }

  constructor() { }



}
