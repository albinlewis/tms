import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task';
import { TaskDataService } from '../../services/task-data-service'

import { Angular2Csv } from 'angular2-csv/Angular2-csv';

// import * as MailHeader from '../../templates/mail-header.html';
// import * as MailFooter from '../../templates/mail-footer.html';

@Component({
    selector: 'task-export',
    templateUrl: './export.component.html',
    styleUrls: []
})
export class TaskExportComponent implements OnInit {

    enableMailing: Boolean = true;

    selectedMailOption: String;
    selectedDownloadOption: String;
    selectedDownloadFormat: String;

    mailOptions = [
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" }
    ];
    downloadOptions = [
        { title: "Raw Data", content: "raw" }/*,
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" }
        */
    ];
    formatOptions = [
        /*{ title: "HTML", content: "html" },*/
        { title: "JSON", content: "json" },
        { title: "CSV", content: "csv" },
    ];

    @Input()
    tasks: Task[];

    mailHeader: String;
    mailFooter: String;
    mailReceiver: String;

    constructor(private http: HttpClient, private taskDataService: TaskDataService) {
        this.mailHeader = '';
        this.mailFooter = '';
        this.mailReceiver = '';
    }

    ngOnInit() {
        this.taskDataService.mailReceiver.subscribe((mr) => {
            this.mailReceiver = mr;
            console.log(this.mailReceiver);
        })
    }

    /**
     * process task data to be sent as mail
     */
    public processData(option) {
        let data = 'no data available';
        console.log('data processing started');
        switch (option) {
            case 'journal':
                data = this.dailyJournalHTML();
                break;
            case 'table':
                data = this.timeTrackingHTML();
                break;
            default:
                data = this.todoListHTML();
                break;
        }
        return data;
    }

    public addHeaderAndFooter(content) {
        return this.mailHeader + content + this.mailFooter;
    }

    /**
     * todo list processing function
     */
    public todoListHTML() {
        let todo = '<h2>ToDo-List</h2>';
        this.tasks.forEach(t => {
            if (t.done != true) {
                todo += '<li style="list-style: none; margin: 10px;">' + t.title + '</li>'
            }
        });
        return todo;
    }

    public dailyJournalHTML() {
        let journal = '<h2>Stand-Up Journal</h2>';
        this.tasks.forEach(t => {
            if (t.done == true) {
                journal += '<h3>' + t.title + '</h3>';
                t.notes.forEach(n => {
                    journal += '<li style="list-style: none; margin: 10px;">' + n + '</li>';
                });
            }
        });
        return journal;
    }

    public timeTrackingHTML() {
        let table = '<h2>Timetracking Table</h2>';
        table += '<table><tr><th>Task</th><th>Time spent (min)</th><th>Status</th></tr>';
        this.tasks.forEach(t => {
            table += '<tr><td>' + t.title + '</td><td>' + (t.time.valueOf() / 60).toFixed(2) + '</td><td>';
            if (t.done == true) {
                table += '<span style="color: green;">Done</span>';
            } else {
                table += '<span style="color: red;">ToDo</span>';
            }
            table += '</td></tr>';
        });
        table += '</table>';
        return table;
    }

    /**
     * sends mail
     */
    public sendMail(data) {
        this.http.post('http://localhost:3333/api/mails/send', {
            mailReceiver: this.mailReceiver,
            mailSubject: "TMS - Export",
            mailContent: this.addHeaderAndFooter(data)
        }).subscribe(
            res => {
                console.log(res);
            }, err => {
                console.log("Error occured");
            });
    }

    /**
     * starts download of data
     */
    public downloadData() {
        if (this.selectedDownloadFormat == 'csv') {
            let csv = new Angular2Csv(this.tasks, 'task-data', {
                fieldSeparator: ';'
            });
        } else {
            if (this.selectedDownloadFormat == 'json') {
                let downloadHelper = document.createElement('a');
                downloadHelper.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.tasks)));
                downloadHelper.setAttribute("download", "task-data.json");
                downloadHelper.click();
                downloadHelper.remove();
            }
        }
    }

    /**
     * frontend call for mail button
     */
    public processDataAndSendMail() {
        let data = this.processData(this.selectedMailOption);
        if (this.enableMailing == true) {
            this.sendMail(data);
            console.log('mail delivery started');
        } else {
            console.log('mail delivery disabled.\ncontent that would have been sent:\n\n' + JSON.stringify(this.addHeaderAndFooter(data)));
        }
    }
}
