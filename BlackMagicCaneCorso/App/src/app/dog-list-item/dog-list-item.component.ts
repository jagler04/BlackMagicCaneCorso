import { Component, OnInit, Input } from '@angular/core';
import {MatDialog } from '@angular/material';
import { DogInfo } from '../Clients/PuppiesClient';
import { EditDogDialogComponent } from '../edit-dog-dialog/edit-dog-dialog.component';
import { EditPicturesDialogComponent } from '../edit-pictures-dialog/edit-pictures-dialog.component';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';
import { PuppiesService } from '../Services/puppies.service';

@Component({
  selector: 'dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.css']
})
export class DogListItemComponent implements OnInit {


  @Input()
  Dog: DogInfo;

  opened: boolean = false;

  constructor(public dialog: MatDialog, private puppyService: PuppiesService) {
   }

  ngOnInit() {
  }

  OpenOrClose(){
    this.opened = !this.opened;
  }
  ShowEdit(){
    //SHOW EDIT DIALOG
    const dialogRef = this.dialog.open(EditDogDialogComponent, {
      data: {dogData: this.Dog}
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
  ShowDelete(){
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {message: "Are you sure you wish to delete " + this.Dog.name + "?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.puppyService.DeleteDog(this.Dog);
      }
    });
  }
}
