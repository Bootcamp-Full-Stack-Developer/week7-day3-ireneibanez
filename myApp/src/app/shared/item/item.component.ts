import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  @Input() entrada;
  @Output() delete = new EventEmitter();

  deleteTask(tarea) {
    this.delete.emit(tarea);
  }
}
