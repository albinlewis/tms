import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task';

@Component({
    selector: 'task-export',
    templateUrl: './export.component.html',
    styleUrls: []
})
export class TaskExportComponent implements OnInit {

    enableMailing = false;

    mailOptions = [
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" }
    ];
    downloadOptions = [
        { title: "Raw Data", content: "raw" },
        { title: "ToDo-List", content: "list" },
        { title: "Daily-Standup Journal", content: "journal" },
        { title: "Time Tracking Table", content: "table" }
    ];
    formatOptions = [
        { title: "HTML", content: "html" },
        { title: "JSON", content: "json" },
        { title: "CSV", content: "csv" },
    ];

    @Input()
    tasks: Task[];

    constructor(private http: HttpClient) { }

    ngOnInit() { }

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
    /**
     * process task data to be download
     */
    public processDataDL(option, format) {
        console.log(option + ' : ' + format);
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
                    '<li style="list-style: none; margin: 10px;">' + n + '</li>';
                });
            }
        });
        return journal;
    }

    public timeTrackingHTML(){
        let table = '<h2>Timetracking Table</h2>';
        table += '<table><tr><th>Task</th><th>Time spent (min)</th><th>Status</th></tr>';
        this.tasks.forEach(t => {
            table += '<tr><td>' + t.title + '</td><td>' + (t.time.valueOf() / 60).toFixed(2) + '</td><td>';
            if (t.done == true){
                table += '<span style="color: green;">Done</span>';
            }else{
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
            mailReceiver: "",
            mailSubject: "Your requested mail from TMS",
            mailContent: data
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
    public downloadData(data) {
        console.log({ message: 'not implemented yet.', content: data });
    }

    /**
     * frontend call for download button
     */
    public processDataAndDownload(option, format) {
        let data = this.processDataDL(option, format);
        this.downloadData(data);
        console.log('download started');
    }

    /**
     * frontend call for mail button
     */
    public processDataAndSendMail(option) {
        let data = this.processData(option);
        if (this.enableMailing == true) {
            this.sendMail(data);
            console.log('mail delivery started');
        } else {
            console.log('mail delivery disabled.\ncontent that would have been sent:\n\n' + JSON.stringify(data));
        }
    }

}
