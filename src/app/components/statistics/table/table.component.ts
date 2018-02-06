import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TaskDataService } from '../../../services/task-data-service';
import { Task } from '../../../models/task';
import { UpdateService } from '../../../services/UpdateService';

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
    //console.log(this.element);
    let status: String;

    for (const eachObj of this.tasks) {
      if (eachObj.done === true) {
        status = 'Done';
      } else {
        status = 'ToDo';
      }

      tablelabels.push(
        { title: eachObj.title, time: this.formatTime(eachObj.time), done: status }
      );


    }
    this.element = tablelabels;
    this.displayedColumns = ['title', 'time', 'done'];
    this.dataSource = new MatTableDataSource<Element>(this.element);
    //console.log(this.element);
    for (let i = 0; i < 100; i++) {

    }
  }

  public formatTime(time) {
    const seconds = this.pad(time % 60);
    const minutes = this.pad((Math.floor(time / 60)) % 60);
    const hours = this.pad(Math.floor((time / 60) / 60));
    let paddedtime = '';

    if (hours != '00') {
      paddedtime = hours + 'h ' + minutes + 'm ' + seconds + 's';
    }

    if (hours == '00' && minutes != '00') {
      paddedtime = minutes + 'm ' + seconds + 's';
    }

    if (minutes == '00' && seconds != '00') {
      paddedtime = seconds + 's';
    }

    if (hours == '00' && minutes == '00' && seconds == '00') {
      paddedtime = 'No time';
    }

    return paddedtime;
  }
  public pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }


}

export interface Element {
  /*name: string;
  position: number;
  weight: number;
  symbol: string;*/
  title: String;
  time: String;
  done: Boolean;
}


