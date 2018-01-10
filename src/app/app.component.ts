import { OnInit, Component } from '@angular/core';
import { TaskDataService } from './services/task-data-service';
import { Task } from './models/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskDataService]
})
export class AppComponent implements OnInit {
  title = 'Task Management System';
  tasks: Task[] = [];

  selectedTask: Task;
  openCollapse: boolean;

  constructor(private taskService: TaskDataService, private http: HttpClient) {
  }

  public ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public filterDoneTasks(tasklist) {
    return this.tasks.filter(task => task.done == false);
  }

  // ToDo: Event Handler (onAddTask, onDeleteTask, ...)
}
