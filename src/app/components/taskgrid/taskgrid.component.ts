import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Task } from '../../models/task';
import { TaskDataService } from '../../services/task-data-service';

@Component({
  selector: 'taskgrid',
  templateUrl: './taskgrid.component.html',
  styleUrls: ['./taskgrid.component.scss']
})
export class TaskgridComponent implements OnInit {
  @Input() tasks: Task[];

  selected: boolean;
  cols: number;
  oldTask: Task = null;

  constructor(private taskService: TaskDataService) {
    this.cols = 2;
  }

  ngOnInit() {
    var oldactivetask = this.findActiveTask();

    if (oldactivetask) {
      oldactivetask.active = false;
      this.taskService.updateTask(oldactivetask).subscribe(() => { });
    }
  }

  private toggleTracking(newTask) {
    this.taskService.activeTask.next(newTask);
    this.taskService.timerHelper(this.oldTask, newTask, this.taskService.timerState.getValue());
    this.oldTask = newTask;
  }

  private findActiveTask() {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].active) {
        return this.tasks[i];
      }
    }
    return null;
  }

  public filterDoneTasks(tasklist) {
    return this.tasks.filter(task => task.done == false);
  }

  private formatTime(time) {
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


