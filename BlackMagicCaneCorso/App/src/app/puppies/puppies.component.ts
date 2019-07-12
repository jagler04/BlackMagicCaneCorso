import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'
import { AnnouncementService } from '../announcement.service';
import { AnnouncementModel } from '../Clients/PuppiesClient';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.scss']
})
export class PuppiesComponent implements OnInit {
  announcments: AnnouncementModel[];
  constructor(public dialog: MatDialog, private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementService.Get().subscribe(result => {this.announcments = result;});
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
