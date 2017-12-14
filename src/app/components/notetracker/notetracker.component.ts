import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction-service'

@Component({
  selector: 'notetracker',
  templateUrl: './notetracker.component.html',
  styleUrls: ['./notetracker.component.scss']
})
export class NotetrackerComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.activeTask.subscribe((activeTask: String) => {
      console.log(activeTask);
  });
  }

}
