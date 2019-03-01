import { Component, OnInit, Inject } from '@angular/core';
import { DogInfo } from '../Clients/PuppiesClient';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PictureService } from '../Services/picture.service';

export interface editDialogData{
  dogData: DogInfo;
}

@Component({
  selector: 'app-edit-pictures-dialog',
  templateUrl: './edit-pictures-dialog.component.html',
  styleUrls: ['./edit-pictures-dialog.component.css']
})
export class EditPicturesDialogComponent implements OnInit {

  dog:DogInfo;
  constructor(
    public dialogRef: MatDialogRef<EditPicturesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: editDialogData,
    private pictureService: PictureService) {
      this.dog = data.dogData;
    }

  ngOnInit() {
  }

  AddPicture(){
    this.pictureService.addPicture(this.dog, )
  }
}
