import { TaskDataService } from './../../services/task-data-service';
import { Task } from './../../models/task';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {

 

  tasklist: Task[] = [];
  task: Task = new Task();
  selectedTask: Task;
  openCollapse = false;


  constructor(private taskDataService: TaskDataService) {  }
  // , public snackBar: MatSnackBar
  ngOnInit() {
    this.getTasks();
  }

  onselect(task: Task): void {
    this.selectedTask = task;
    if (this.openCollapse === true) {
      this.openCollapse = false;
    }else {
      this.openCollapse = true;
    }

  }
  // openSnackbar() {
  //   this.snackBar.open('Task updated', '', {duration: 2000});
  //   }


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
