import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskDataService } from '../../services/task-data-service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  list: String[];
  selectedItem: String;
  task: Task[];

  constructor(private taskService: TaskDataService) {
    this.list = ['Pie-Chart', 'Bar-Diagram', 'Timetracking Table'];
    this.selectedItem = 'Pie-Chart';
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.task = tasks;
      });
  }

  onselect(item: String) {
    this.selectedItem = item;
  }

  pieselect() {
    if (this.selectedItem === 'Pie-Chart') {
      return true;
    }
  }

  barselect() {
    if (this.selectedItem === 'Bar-Diagram') {
      return true;
    }
  }

  tableselect() {
    if (this.selectedItem === 'Timetracking Table') {
      return true;
    }
  }

}
