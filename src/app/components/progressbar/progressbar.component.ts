import { Component, OnInit, Input } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  value: Number;

  constructor(private taskService: TaskDataService) {
    this.taskService.getTasks().subscribe((tasks) => { this.setProgress(tasks) })
  }

  ngOnInit() {
  }

  setProgress(tasks: Task[]) {
    var alltasks = tasks;
    var donetasks = tasks.filter(function (task) {
      return task.done == true;
    });

    this.value = donetasks.length * 100 / alltasks.length;
  }
}
