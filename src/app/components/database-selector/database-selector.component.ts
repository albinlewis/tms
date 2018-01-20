import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
import {TaskDataService} from '../../services/task-data-service'

@Component({
  selector: 'database-selector',
  templateUrl: './database-selector.component.html',
  styleUrls: ['./database-selector.component.scss']
})
export class DatabaseSelectorComponent {

  constructor(public dialog: MatDialog, private taskDataService: TaskDataService) { }

  dbtoken: string;
  username: string;
  email: string;

  openDialog(): void {
    let dialogRef = this.dialog.open(DatabaseDialog, {
      height: '340px',
      width: '520px',
      data: { dbtoken: this.dbtoken, username: this.username, email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dbtoken = result.dbtoken;
        this.username = result.username;
        this.email = result.email;
        this.taskDataService.mailReceiver.next(result.email);
      }
    });
  }
}

@Component({
  selector: 'database-dialog',
  templateUrl: 'database-dialog.html',
})
export class DatabaseDialog {
  constructor(
    public dialogRef: MatDialogRef<DatabaseDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}