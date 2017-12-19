import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';

@Component({
  selector: 'notetracker',
  templateUrl: './notetracker.component.html',
  styleUrls: ['./notetracker.component.scss']
})
export class NotetrackerComponent implements OnInit {

  notes: String[];
  tasktitle: String;
  show: Boolean;
  activeTask: Task;

  constructor(private taskService: TaskDataService) { }

  ngOnInit() {
    this.taskService.activeTask.subscribe((activeTask: Task) => {
      this.activeTask = activeTask;
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
      this.taskService.addNote(this.activeTask, note);
    }
  }

  taskCompleted() {
    var completedTask = this.activeTask;
    completedTask.active = false;
    completedTask.done = true; 
    this.taskService.activeTask.next(null);
    completedTask.time = this.taskService.timerState.getValue();

    this.taskService.updateTask(completedTask).subscribe(() => { });
    this.show = false;
  }
}
