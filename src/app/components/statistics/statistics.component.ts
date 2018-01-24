import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../../models/task';
import {TaskDataService} from '../../services/task-data-service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  list: String[];
  selectedItem: String;
  @Input() task: Task[];


  constructor(private taskService: TaskDataService) {
    this.list = ['Pie chart', 'Bar chart', 'Table view'];
    this.selectedItem = 'Pie chart';
    console.log('i am called');

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
    if (this.selectedItem === 'Pie chart') {
      return true;
    }
  }

  barselect() {
    if (this.selectedItem === 'Bar chart') {
      return true;
    }
  }

  tableselect() {
    if (this.selectedItem === 'Table view') {
      return true;
    }
  }


}
