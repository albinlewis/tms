import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasklistitem',
  templateUrl: './tasklistitem.component.html',
  styleUrls: ['./tasklistitem.component.css']
})
export class TasklistitemComponent implements OnInit {

  @Input()
  task: Task;

  constructor() { }

  ngOnInit() {
  }

}
