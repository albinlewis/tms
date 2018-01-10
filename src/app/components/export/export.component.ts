import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
    selector: 'task-export',
    templateUrl: './export.component.html',
    styleUrls: []
})
export class TaskExportComponent implements OnInit {

    @Input()
    tasks: Task[];

    constructor() { }

    ngOnInit() {
        console.log(this.tasks.length);
    }

}
