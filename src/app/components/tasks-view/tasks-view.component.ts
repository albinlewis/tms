import { Task } from './../../models/task';
import { TaskComponent } from './../task/task.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {


  tasklist: Task[] = [];
  task: Task = new Task();
  selectedTask: Task;

  constructor( ) { }

  ngOnInit() {
    /*this.dataService.getAllTask()
    .subscribe(t => {
      console.log(t);
      this.tasklist = t;
    });*/
  }

  onselect(task: Task): void {
    this.selectedTask = task;
  }

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

  onupdateTask(task) {


    /*this.dataService.updateTaskById(task)
    .subscribe(newtask => {
      task = newtask;
    });*/
  }

  getTasks() {
    // this.dataService.getAllTasks();
    // console.log();
  }

}
