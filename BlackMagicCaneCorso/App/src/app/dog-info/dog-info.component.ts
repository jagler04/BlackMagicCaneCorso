import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { dogInfo } from '../dog-info';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'

@Component({
  selector: 'dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})
export class DogInfoComponent implements OnInit {
 @Input()
 dog: dogInfo;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewImage(imgURL: string) {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      height: '80%',
      data: {url: imgURL}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
