import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  imageUrl: string;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.imageUrl = data.url;
    }

  CloseDialog(){
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
