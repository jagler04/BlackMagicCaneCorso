import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  imgs:string[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.imgs = [
      "assets/images/about/Arson1.jpg",
      "assets/images/about/Dexter.jpg",
      "assets/images/about/Eve.jpg",
      "assets/images/about/Eveplay.jpg",
      "assets/images/about/Hennywin.jpg",
      "assets/images/about/moxie.jpg",
      "assets/images/about/moxiepup.jpg",
      "assets/images/about/Nera.jpg",
      "assets/images/about/Ti2.jpg"

    ]
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
