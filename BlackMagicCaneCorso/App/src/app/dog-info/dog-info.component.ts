import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { dogInfo } from '../dog-info';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'
import { DogInfo, PictureInfo } from '../Clients/PuppiesClient'
import { PictureService } from '../Services/picture.service';

@Component({
  selector: 'dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})
export class DogInfoComponent implements OnInit {
 @Input()
 dog: DogInfo;
 profilePicture: string;
 pictures: PictureInfo[];

  constructor(public dialog: MatDialog, private pictureService: PictureService) { }

  ngOnInit() {
    this.pictureService.GetPictures(this.dog.id).subscribe(result => {
      this.pictures = result;
    })
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
