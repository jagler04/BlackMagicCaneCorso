import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-announcement-dialog',
  templateUrl: './add-announcement-dialog.component.html',
  styleUrls: ['./add-announcement-dialog.component.css']
})
export class AddAnnouncementDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAnnouncementDialogComponent>) { }

  ngOnInit() {
  }

  public Cancel(){
    this.dialogRef.close(undefined);
  }
  public Add(announcementText: string){
    this.dialogRef.close(announcementText);
  }
}
