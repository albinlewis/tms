import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Task} from '../../models/task';
import {TaskDataService} from '../../services/task-data-service';
import {MatSnackBar} from '@angular/material';
import {UpdateService} from '../../services/UpdateService';



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

  constructor(private taskService: TaskDataService, private toggleFeedback: MatSnackBar, private u: UpdateService) {
    this.cols = 2;
  }

  ngOnInit() {
    const oldactivetask = this.findActiveTask();

    if (oldactivetask) {
      oldactivetask.active = false;
      this.taskService.updateTask(oldactivetask).subscribe(() => {
      });
    }
  }

  private toggleTracking(newTask: Task) {
    this.taskService.activeTask.next(newTask);
    this.taskService.timerHelper(this.oldTask, newTask, this.taskService.timerState.getValue());
    if (this.oldTask !== newTask) {
      this.openSnackBar(String('Tracking Task "' + newTask.title + '"'), 'Active');
    }
    this.oldTask = newTask;
    this.u.tasksUpdated.emit(this.tasks);

  }

  private findActiveTask() {
    for (let i = 0; i < this.tasks.length; i++) {
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
    const seconds = this.pad(time % 60);
    const minutes = this.pad((Math.floor(time / 60)) % 60);
    const hours = this.pad(Math.floor((time / 60) / 60));
    let paddedtime = '';

    if (hours != '00') {
      paddedtime = hours + 'h ' + minutes + 'm ' + seconds + 's';
    }

    if (hours == '00' && minutes != '00') {
      paddedtime = minutes + 'm ' + seconds + 's';
    }

    if (minutes == '00' && seconds != '00') {
      paddedtime = seconds + 's';
    }

    if (hours == '00' && minutes == '00' && seconds == '00') {
      paddedtime = 'No time';
    }

    return paddedtime;
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  openSnackBar(message: string, action: string) {
    this.toggleFeedback.open(message, action, {
      duration: 3000,
    });
  }
}


