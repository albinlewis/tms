import { Component, OnInit, Input } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() tasks: Task[];

  value: Number;

  constructor(private taskService: TaskDataService) {
  }

  ngOnInit() {
  }

  setProgress(tasks: Task[]) {
    var alltasks = tasks;
    var donetasks = tasks.filter(function (task) {
      return task.done == true;
    });

    return donetasks.length * 100 / alltasks.length;
  }
}
