import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api-service';
import {TaskDataService} from '../../../services/task-data-service';
import {Task} from '../../../models/task';
import {UpdateService} from '../../../services/UpdateService';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

   task: Task[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  Taskstitle: any[];
  Time: Number [];
  public barChartLabels: String[];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: any[] = [{data: [], label: 'Tasks in Sekunden'}];

  constructor(private taskService: TaskDataService, private u: UpdateService) {
    console.log('barchart created');
    console.log(this.barChartData[0].data);
    this.taskService.getTasks()
      .subscribe((tasks) => {

        this.task = tasks;
        console.log(this.task);


        this.display();


      });
    this.u.tasksUpdated
      .subscribe((task) => {
     this.task = task;
     this.display();
    });


  }

  ngOnInit() {


  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  display() {
    const barchartslabels: String[] = [];
    const timearray: Number[] = [];
    for (const eachObj of this.task) {

      barchartslabels.push(eachObj.title);

      timearray.push(eachObj.time);

    }
    console.log(timearray);
    this.barChartLabels = barchartslabels;
    this.Time = timearray;
    this.barChartData[0].data = this.Time;


  }


}
