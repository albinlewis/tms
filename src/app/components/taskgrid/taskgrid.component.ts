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
    
    if(oldactivetask){
    oldactivetask.active = false;
    this.taskService.updateTask(oldactivetask).subscribe(() => {});
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
}


