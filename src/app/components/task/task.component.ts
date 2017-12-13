import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  panelOpenState: boolean = false;

  @Input()
  task: Task;

  @Output()
  updateTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  delete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  deleteTask(task: Task) {
    this.delete.emit(task);
  }

  updatefullTask(task: Task) {
    this.updateTask.emit(task);
  }

}
