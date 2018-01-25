import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {TaskDataService} from '../../../services/task-data-service';
import {Task} from '../../../models/task';
import {UpdateService} from '../../../services/UpdateService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public tasks: Task[];

  element: any[];

  displayedColumns: any[];
  dataSource: MatTableDataSource<Element>;


  constructor(private taskService: TaskDataService, private u: UpdateService) {


    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.display();


      });
    this.u.tasksUpdated
      .subscribe((task) => {
        this.tasks = task;
        this.display();
      });


  }


  display() {
    const tablelabels: any[] = [];
    console.log(this.element);
    let status: String;

    for (const eachObj of this.tasks) {
      if (eachObj.done === true) {
        status = 'yes';
      } else {
        status = 'no';
      }

      tablelabels.push(
        {title: eachObj.title, time: eachObj.time, done: status}
      );


    }
    this.element = tablelabels;
    this.displayedColumns = ['title', 'time', 'done'];
    this.dataSource = new MatTableDataSource<Element>(this.element);
    console.log(this.element);
    for (let i = 0; i < 100; i++) {

    }
  }


}

export interface Element {
  /*name: string;
  position: number;
  weight: number;
  symbol: string;*/
  title: String;
  time: Number;
  done: Boolean;
}


