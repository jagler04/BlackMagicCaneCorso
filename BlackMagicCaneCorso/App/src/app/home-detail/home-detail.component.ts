import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'

@Component({
  selector: 'home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

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
