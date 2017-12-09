import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taskgrid',
  templateUrl: './taskgrid.component.html',
  styleUrls: ['./taskgrid.component.scss']
})
export class TaskgridComponent implements OnInit {

  cols: Number;
  tasklist: [{id: Number, name: String, tracking: Boolean}];

  constructor() {
    this.cols = 4;

    for (let i = 1; i < 21; i++) {
      if(i === 1){this.tasklist = [{ id: i, name: ("Task " + i), tracking: false }]}
      else{this.tasklist.push({ id: i, name: ("Task " + i), tracking: false })};
    }
  }

  ngOnInit() {
  }

  toggleTracking(id) {
    var selectedTask = this.tasklist.find(function (item) {
      return item.id === id;
    });
    for(let i = 0; this.tasklist.length > i; i++){
      if(this.tasklist[i] === selectedTask){continue;}
      this.tasklist[i].tracking = false;
    }
    selectedTask.tracking = !selectedTask.tracking;
  }
}
