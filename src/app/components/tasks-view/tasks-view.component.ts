import { TaskDataService } from './../../services/task-data-service';
import { Task } from './../../models/task';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';



@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {

  @Input()
  openCollapse: boolean;

  tasklist: Task[] = [];
  task: Task = new Task();
  selectedTask: Task;
  // openCollapse: boolean = false;


  constructor(private taskDataService: TaskDataService) {  }

  ngOnInit() {
    this.getTasks();
  }

  onselect(task: Task, openCollapse: boolean): void {
    this.selectedTask = task;
    openCollapse = true;

  }

  onAddTask(task: Task) {
    console.log(task);
    this.taskDataService.addTask(task)
        .subscribe((t) => {
          this.tasklist.push(t);
        });
    this.task = new Task();
  }
  onDeleteTask(task: Task) {
    this.tasklist = this.tasklist.filter((t) => t.title !== task.title);

    this.taskDataService.deleteTask(task._id)
      .subscribe(t => {
        this.tasklist = this.tasklist.filter(res => res._id !== task._id);
      });

  }

  onupdateTask(task: Task) {
    this.taskDataService.updateTask(task)
    .subscribe(t => {
      task = t;
    });
  }

  getTasks() {
    this.taskDataService.getTasks()
      .subscribe(tasks => {
        this.tasklist = tasks;
      });
  }

}
