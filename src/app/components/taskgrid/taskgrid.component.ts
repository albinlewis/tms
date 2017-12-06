import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taskgrid',
  templateUrl: './taskgrid.component.html',
  styleUrls: ['./taskgrid.component.scss']
})
export class TaskgridComponent implements OnInit {

  cols: Number;
  tasklist: [{}]

  constructor() {
    this.cols = 4;

    /* Test Block */
    this.tasklist = [{name: "Task 1"}]
    for(var i = 2; i < 21; i++){
      this.tasklist.push({name: ("Task "+i)});
    }
  }

  ngOnInit() {
  }

}
