import { TaskDataService } from './../../services/task-data-service';
import { Task } from './../../models/task';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {
  @Input() tasks: Task[];

  task: Task = new Task();
  selectedTask: Task;
  openCollapse = false;


  constructor(private taskDataService: TaskDataService) { }
  // , public snackBar: MatSnackBar
  ngOnInit() {
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
  // openSnackbar() {
  //   this.snackBar.open('Task updated', '', {duration: 2000});
  //   }


  onAddTask(task: Task) {
    this.taskDataService.addTask(task)
      .subscribe((t) => {
        this.tasks.push(t);
      });
    // this.task = new Task();
  }
  onDeleteTask(task: Task) {
    // this.tasks = this.tasks.filter((t) => t.title !== task.title);

    this.taskDataService.deleteTask(task._id).subscribe(() => {});
    this.openCollapse = false;
    this.tasks.splice(this.tasks.findIndex(function (element) { return element === task }), 1);
  }

  onupdateTask(task: Task) {
    this.taskDataService.updateTask(task)
      .subscribe(t => {
        task = t;
        //task.updatedAt = Date.now();
      });
  }

  getTasks() {
    this.taskDataService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

}
