import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../../../services/task-data-service';
import {Task} from '../../../models/task';
import {UpdateService} from '../../../services/UpdateService';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  public tasks: Task[];


  // Pie
  public pieChartLabels: String[];
  public pieChartData: Number[] = [];
  public pieChartType: String = 'pie';

  constructor(private taskService: TaskDataService, private u: UpdateService) {

    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
        console.log(this.tasks);

        this.display();

      });
    this.u.tasksUpdated
      .subscribe((task) => {
      this.pieChartData = [];
        this.tasks = task;
        this.display();

      });


  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  display() {
    const piechartslabels: String[] = [];

    for (const eachObj of this.tasks) {

      piechartslabels.push(eachObj.title);
      this.pieChartData.push(eachObj.time);


    }

    this.pieChartLabels = piechartslabels;


  }


}
