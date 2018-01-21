import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  list: String[];
  selectedItem: String;

  constructor() {
    this.list = ['Pie chart', 'Bar chart', 'Table view'];
    this.selectedItem = 'Pie chart';
  }

  ngOnInit() {
  }

  onselect (item: String) {
  this.selectedItem = item;

  }
  pieselect () {
    if (this.selectedItem === 'Pie chart') {
      return true;
    }
  }
  barselect () {
    if (this.selectedItem === 'Bar chart') {
      return true;
    }
  }

  tableselect () {
    if (this.selectedItem === 'Table view') {
      return true;
    }
  }



}
