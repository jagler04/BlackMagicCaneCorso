import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface yesNoDialogData{
  message: string;
}

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent implements OnInit {

  message: string;
  constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: yesNoDialogData) {
      this.message = data.message;
     }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close(false);
  }

  delete(){
    this.dialogRef.close(true);
  }
}
