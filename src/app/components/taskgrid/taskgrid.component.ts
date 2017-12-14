import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Task } from '../../models/task'
import { InteractionService } from '../../services/interaction-service'

@Component({
  selector: 'taskgrid',
  templateUrl: './taskgrid.component.html',
  styleUrls: ['./taskgrid.component.scss']
})
export class TaskgridComponent implements OnInit {
  @Input()
  tasks: Task[];

  selected: boolean;
  cols: number;

  constructor(private interactionService: InteractionService) {
    this.cols = 2;
    this.selected = false;
  }

  ngOnInit() {
  }

  private toggleTracking(id) {
    this.selected = !this.selected;
    this.interactionService.isSelected.next(this.selected);
    this.interactionService.activeTask.next(id);
  }
}
