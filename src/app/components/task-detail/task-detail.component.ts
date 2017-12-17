import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';

  @Input()
  task: Task;
  panelOpenState: boolean;

  @Output()
  updateTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updatefullTask(task: Task) {
    this.updateTask.emit(task);
  }

}
