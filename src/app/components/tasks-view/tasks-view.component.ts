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
    /*this.dataService.getAllTask()
    .subscribe(t => {
      console.log(t);
      this.tasklist = t;
    });*/
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

    this.tasklist.push(task);
    // this.dataService.addTask(task);
    this.task = new Task();
   // this.tasklist.push(task);
    /*this.dataService.addTask(task)
      .subscribe((t) => {
        this.tasklist.push(t);
      });*/
  }
  onDeleteTask(task) {
    this.tasklist = this.tasklist.filter((t) => t.title !== task.title);

    /*this.dataService.deleteTask(task)
    .subscribe((res) => {
      this.tasklist = this.tasklist
        .filter((t) => t.id !== task.id);
    });*/
  }

  onupdateTask(task: Task) {
    this.taskDataService.updateTask(task)
    .subscribe(t => {
      task = t;
      //task.updatedAt = Date.now();
    });
  }

  getTasks() {
    // this.dataService.getAllTasks();
    // console.log();
  }

}
