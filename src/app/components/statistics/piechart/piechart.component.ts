import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../../services/task-data-service';
import { Task } from '../../../models/task';
import { UpdateService } from '../../../services/UpdateService';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  public tasks: Task[];
  public totalTime: number = 0;

  // Pie
  public pieChartLabels: String[];
  public pieChartData: Number[] = [];
  public pieChartType: String = 'pie';

  constructor(private taskService: TaskDataService, private u: UpdateService) {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.tasks.forEach(el => {
          this.totalTime += Number(el.time);
        });

        this.display();
      });
    this.u.tasksUpdated
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.totalTime = 0;
        this.pieChartData = [];
        this.display();
        this.tasks.forEach(el => {
          this.totalTime += Number(el.time);
        });

      });
  }

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  display() {
    const piechartslabels: String[] = [];
    for (const eachObj of this.tasks) {
      piechartslabels.push(eachObj.title);
      this.pieChartData.push(parseFloat((Number(eachObj.time) / 60).toFixed(2)));
    }
    setTimeout(() => {
      this.pieChartLabels = piechartslabels;
    }, 50);
    console.log(this.pieChartLabels);
  }

  display2() {
    const piechartslabels: String[] = [];
    for (const eachObj of this.tasks) {
      piechartslabels.push(eachObj.title);
      this.pieChartData.push(parseFloat((Number(eachObj.time) / 60).toFixed(2)));
    }

    setTimeout(() => {
      this.pieChartLabels = piechartslabels;
    }, 50);
    console.log(this.pieChartLabels);
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
