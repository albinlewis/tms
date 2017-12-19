import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
  position = 'below';

  @Input()
  task: Task;

  constructor() { }

  ngOnInit() {
  }

}
