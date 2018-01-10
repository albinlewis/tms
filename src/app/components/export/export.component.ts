import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
    selector: 'task-export',
    templateUrl: './export.component.html',
    styleUrls: []
})
export class TaskExportComponent implements OnInit {

    mailOptions = [
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" }
    ];
    downloadOptions = [
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" },
        { title: "Raw Data", content: "raw" }
    ];
    formatOptions = [
        { title: "JSON", content: "json" },
        { title: "CSV", content: "csv" },
    ];

    @Input()
    tasks: Task[];

    constructor() { }

    ngOnInit() { }

}
