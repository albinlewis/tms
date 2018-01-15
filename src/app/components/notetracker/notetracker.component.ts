import { Component, OnInit, HostListener } from '@angular/core';
import { TaskDataService } from '../../services/task-data-service';
import { Task } from '../../models/task';

@Component({
  selector: 'notetracker',
  templateUrl: './notetracker.component.html',
  styleUrls: ['./notetracker.component.scss']
})
export class NotetrackerComponent implements OnInit {
  @HostListener('window:beforeunload')
  onClose(){
    if(this.activeTask){
      var currentTask = this.activeTask;
      currentTask.active = false;
      this.taskService.activeTask.next(null);
      currentTask.time = this.taskService.timerState.getValue();
      this.taskService.updateTask(currentTask).subscribe(() => { });
    }
  }

  notes: String[];
  editedNotes: String[];
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

  saveEditedNotes(checked, editedNotes) {
    if (checked) {

      for (let note of editedNotes) {
        if (note == "") {
          editedNotes.splice(editedNotes.indexOf(note), 1);
        }
      }

      var toEditTask = this.activeTask;
      toEditTask.notes = editedNotes;
      this.taskService.updateTask(toEditTask).subscribe(() => { });
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

  trackByFn(index: any, item: any) {
    return index;
 }
}
