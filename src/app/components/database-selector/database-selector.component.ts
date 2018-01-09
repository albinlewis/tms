import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'database-selector',
  templateUrl: './database-selector.component.html',
  styleUrls: ['./database-selector.component.scss']
})
export class DatabaseSelectorComponent {

  constructor(public dialog: MatDialog) { 
    this.dbtoken = null;
    this.username  = null;
  }

  dbtoken: string;
  username: string;

  openDialog(): void {
    let dialogRef = this.dialog.open(DatabaseDialog, {
      height: '320px',
      width: '500px',
      data: { dbtoken: this.dbtoken, username: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dbtoken = result.dbtoken;
        this.username = result.username;
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