import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input()
  tasks: Task[];


  constructor() { }

  ngOnInit() {
  }

}
