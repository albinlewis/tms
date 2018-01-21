import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { MatSnackBar } from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


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

  status = [
    { value: 'false', view: 'ToDo' },
    { value: 'true', view: 'Done' }
  ];
  category = [
    { value: 'Daily', view: 'Daily' },
    { value: 'Favorite', view: 'Favorite' } 
  ];

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  updatefullTask(task: Task, message: string) {
    task.updatedAt = new Date();
    this.snackBar.open(message, 'Updated!!!', {
      duration: 4000,
    });
    this.updateTask.emit(task);
  }

  
  public formatTime(time) {
    var seconds = this.pad(time % 60);
    var minutes = this.pad((Math.floor(time / 60)) % 60);
    var hours = this.pad(Math.floor((time / 60) / 60));
    var paddedtime = "";

    if (hours != "00") {
      paddedtime = hours + "h " + minutes + "m " + seconds + "s";
    }

    if (hours == "00" && minutes != "00") {
      paddedtime = minutes + "m " + seconds + "s";
    }

    if (minutes == "00" && seconds != "00") {
      paddedtime = seconds + "s";
    }

    if (hours == "00" && minutes == "00" && seconds == "00") {
      paddedtime = "No time";
    }

    return paddedtime;
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }


}
