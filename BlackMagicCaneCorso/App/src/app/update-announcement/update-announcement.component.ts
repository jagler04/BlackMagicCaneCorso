import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.css']
})
export class UpdateAnnouncementComponent implements OnInit {
  inputText: string;
  constructor(public dialogRef: MatDialogRef<UpdateAnnouncementComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) { this.inputText = data; }

  ngOnInit() {
  }
  public Cancel(){
    this.dialogRef.close(this.data);
  }
  public Update(announcementText: string){
    this.dialogRef.close(announcementText);
  }
}
