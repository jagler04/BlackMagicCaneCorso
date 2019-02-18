import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DogInfo } from '../Clients/PuppiesClient';
import { EditDogDialogComponent } from '../edit-dog-dialog/edit-dog-dialog.component';
import { EditPicturesDialogComponent } from '../edit-pictures-dialog/edit-pictures-dialog.component';

@Component({
  selector: 'dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.css']
})
export class DogListItemComponent implements OnInit {


  @Input()
  Dog: DogInfo;

  opened: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OpenOrClose(){
    this.opened = !this.opened;
  }
  ShowEdit(){
    //SHOW EDIT DIALOG
    const dialogRef = this.dialog.open(EditDogDialogComponent, {
      data: {dog: this.Dog}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ShowPhotos(){
    //SHOW PHOTOS DIALOG
    const dialogRef = this.dialog.open(EditPicturesDialogComponent, {
      data: {dog: this.Dog}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
