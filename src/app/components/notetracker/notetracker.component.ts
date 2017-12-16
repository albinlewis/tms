import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';
import { isEmpty } from 'rxjs/operators/isEmpty';

@Component({
  selector: 'notetracker',
  templateUrl: './notetracker.component.html',
  styleUrls: ['./notetracker.component.scss']
})
export class NotetrackerComponent implements OnInit {

  notes: String[];
  tasktitle: String;
  show: Boolean;

  constructor(private taskService: TaskDataService) { }

  ngOnInit() {
    this.taskService.activeTask.subscribe((activeTask: Task) => {
      if (activeTask) {
        this.notes = activeTask.notes;
        this.show = true;
        this.tasktitle = activeTask.title;
      }
      else {
        this.notes = [];
        this.show = false;
      }
    });
  }

  addNote(note) {
    if (note) {
      console.log(note);
      // Add Note to Database
    }
  }
}
