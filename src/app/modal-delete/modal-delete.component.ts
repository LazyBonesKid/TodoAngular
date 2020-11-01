import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>() 
  @Output() delete: EventEmitter<void> = new EventEmitter<void>()    
}
