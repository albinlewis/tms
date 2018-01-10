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

    constructor(private http: HttpClient) { }

    ngOnInit() { }

    /**
     * process task data to be sent as mail / download
     */
    public processData() {
        let data = {
            message: "test successful"
        }
        console.log('data processing started');
        return data;
    }

    /**
     * sends mail
     */
    public sendMail(data) {
        this.http.post('http://localhost:3333/api/mails/send', {
            mailReceiver: "",
            mailSubject: "Test Angular Integration",
            mailContent: "test successful"
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

    }

    /**
     * frontend call for download button
     */
    public processDataAndDownload() {
        let data = this.processData();
        this.downloadData(data);
        console.log('download started');
    }

    /**
     * frontend call for mail button
     */
    public processDataAndSendMail() {
        let data = this.processData();
        if (this.enableMailing == true) {
            this.sendMail(data);
            console.log('mail delivery started');
        } else {
            console.log('mail delivery disabled.\ncontent that would have been sent:\n\n' + JSON.stringify(data));
        }
    }

}
