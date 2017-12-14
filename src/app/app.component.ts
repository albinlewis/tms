import { OnInit, Component } from '@angular/core';
import { TaskDataService } from './services/task-data-service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskDataService]
})
export class AppComponent implements OnInit {
  title = 'Task Management System';
  tasks: Task[] = [];

  constructor(private taskService: TaskDataService) {

  }

  public ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // ToDo: Event Handler (onAddTask, onDeleteTask, ...)
}
