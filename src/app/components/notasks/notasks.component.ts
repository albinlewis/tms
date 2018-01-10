import { Task } from '../../models/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'no-tasks',
    templateUrl: './notasks.component.html',
    styleUrls: []
})
export class NoTaskComponent implements OnInit {

    @Input()
    stepper;
    
    @Input()
    tasks: Task[];

    constructor() { }

    ngOnInit() { }

    public goToFirstFrame(){
        this.stepper.selectedIndex = 0;
    }

}
