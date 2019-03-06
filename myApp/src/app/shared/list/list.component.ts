import { Component } from '@angular/core';

@Component ({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  tasks: string[];
  newTask: string;

  constructor(){
    this.tasks = [];
  }

  addNewTask(newTask){
    this.tasks.push(newTask);
  }

  deleteTask(tarea) {
    const index = this.tasks.indexOf(tarea);
    this.tasks.splice(index, 1);
  }
}

