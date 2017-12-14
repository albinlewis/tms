import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';

@Component({
  selector: 'notetracker',
  templateUrl: './notetracker.component.html',
  styleUrls: ['./notetracker.component.scss']
})
export class NotetrackerComponent implements OnInit {

  constructor(private taskService: TaskDataService) { }

  ngOnInit() {
  //   this.interactionService.activeTask.subscribe((activeTask: String) => {
  //     console.log(activeTask);
  // });
  }

}
