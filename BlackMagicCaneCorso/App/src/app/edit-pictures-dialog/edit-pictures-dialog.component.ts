import { Component, OnInit, Inject } from '@angular/core';
import { DogInfo, FileParameter } from '../Clients/PuppiesClient';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PictureService } from '../Services/picture.service';
import { PubSubService } from '../Services/pub-sub.service';

export interface editDialogData{
  dogData: DogInfo;
}

@Component({
  selector: 'app-edit-pictures-dialog',
  templateUrl: './edit-pictures-dialog.component.html',
  styleUrls: ['./edit-pictures-dialog.component.css']
})
export class EditPicturesDialogComponent implements OnInit {
  public selectedFiles: File[] = [];
  public dog:DogInfo;
  constructor(
    public dialogRef: MatDialogRef<EditPicturesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: editDialogData,
    private pictureService: PictureService, private pubsub: PubSubService) {
      this.dog = data.dogData;
      pubsub.$sub("Picture Added").subscribe(() =>{
        this.dog.pictures = pictureService.Pictures;
        this.selectedFiles.shift();
        if(this.selectedFiles.length > 0){
          this.AddPicture(this.selectedFiles[0]);
        }
      });
      pubsub.$sub("Picture Deleted").subscribe(() =>{
        this.dog.pictures = pictureService.Pictures;
      });
    }

  ngOnInit() {
  }
  FileChange(event: any): void{
    this.selectedFiles = event.target.files;
    if( this.selectedFiles && this.selectedFiles.length > 0){
      this.AddPicture(this.selectedFiles[0]);
    }
  }
  AddPicture(file){
    var upFile: FileParameter = {
      data: file,
      fileName: file.name
    };
    this.pictureService.addPicture(this.dog, upFile);
  }
}
