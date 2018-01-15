import { TaskDataService } from './../../services/task-data-service';
import { Task } from './../../models/task';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {
  @Input() tasks: Task[];
  notes: String[];
  task: Task = new Task();
  selectedTask: Task;
  tasktitle: String;
  openCollapse = false;
  status = false;

  NameFormControl = new FormControl('', [
    Validators.required,
  ]);



  constructor(private taskDataService: TaskDataService) { }
  // , public snackBar: MatSnackBar
  ngOnInit() {
    this.taskDataService.activeTask.subscribe((activeTask: Task) => {
      this.selectedTask = activeTask;
      if (activeTask) {
        this.notes = activeTask.notes;
        this.tasktitle = activeTask.title;
      }else {
        this.notes = [];
      }
  });
}

  filterDoneTasks(tasks) {
    if (this.status === true) {
      this.tasks.filter(task => task.done === true);
    }else {
     // this.tasks.filter(task => task.done === false);
    }

  }
  onselect(task: Task): void {
    // this.selectedTask = task;

    if (this.selectedTask === task && this.openCollapse === true) {
      this.openCollapse = false;
      this.selectedTask = null;
    }
    else if (this.selectedTask !== task && this.openCollapse === true) {
      this.selectedTask = task;
      this.openCollapse = true;
    }
    else {
      this.selectedTask = task;
      this.openCollapse = true;
    }

    // if (this.openCollapse === true) {
    //   this.openCollapse = false;
    // }else {
    //   this.openCollapse = true;
    // }

  }
 
  onAddTask(task: Task) {
    this.taskDataService.addTask(task)
      .subscribe((t) => {
        this.tasks.push(t);
      });
    // this.task = new Task();
  }
  onDeleteTask(task: Task) {


    this.taskDataService.deleteTask(task._id).subscribe(() => {});
    this.openCollapse = false;
    this.tasks.splice(this.tasks.findIndex(function (element) { return element === task }), 1);
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
        this.tasks = tasks;
      });
  }

}
