import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service'

@Component({
  selector: 'filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {

  constructor(private taskService: TaskDataService) { }

  ngOnInit() {
  }

  private filterTasks(title){
      this.taskService.searchFilterString.next(title)
  }

}
