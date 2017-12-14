import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Task } from '../../models/task'

@Component({
  selector: 'taskgrid',
  templateUrl: './taskgrid.component.html',
  styleUrls: ['./taskgrid.component.scss']
})
export class TaskgridComponent implements OnInit {
  @Input()
  tasks: Task[];

  @Output()
  runtimer: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  cols: Number;
  selected: Boolean = false;
  
  constructor() {
    this.cols = 2;
  }

  ngOnInit() {
  }

  toggleTracking() {
    // var selectedTask = this.tasks.find(function (item) {
    //   return item._id === id;
    // });
    // for(let i = 0; this.tasks.length > i; i++){
    //   if(this.tasks[i] === selectedTask){continue;}
    //   // this.tasks[i].active = false;
    // }
    // //selectedTask.active = !selectedTask.active;
    this.selected = !this.selected;
    this.runtimer.emit(this.selected);
  }
}
