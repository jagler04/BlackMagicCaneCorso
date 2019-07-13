import { Component, OnInit, Inject } from '@angular/core';
import { DogInfo } from '../Clients/PuppiesClient';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PictureService } from '../Services/picture.service';
import { PubSubService } from '../Services/pub-sub.service';
import { HttpRequest, HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

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
    private pictureService: PictureService, private pubsub: PubSubService,
    private http: HttpClient) {
      this.dog = data.dogData;
      pubsub.$sub("Picture Added").subscribe(() =>{
        this.GetPictures();
      });
      pubsub.$sub("Picture Deleted").subscribe(() =>{
        this.GetPictures();
      });
      pubsub.$sub("Profile Picture Updated").subscribe(() => {
        this.GetPictures();
      });
    }

    GetPictures(){
      this.pictureService.GetPictures(this.dog.id).subscribe(result =>{
        this.dog.pictures = result;
      });
    }
  ngOnInit() {
  }

  file: any;
  progress: number = 0;
  error: string = '';

  onSelectFile($event, file) {
      this.file = file;
  }

  uploadImage() {
    if (this.file.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of this.file)
      formData.append(file.name, file);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", this.progressHandler, false);
    xhr.addEventListener("load", this.completeHandler, false);
    xhr.addEventListener("error", this.errorHandler, false);
    xhr.addEventListener("abort", this.abortHandler, false);

    // Add any event handlers here...
    xhr.open('POST', "/Picture/Add?dogId=" + encodeURIComponent("" + this.dog.id) + "&dogName=" + encodeURIComponent("" + this.dog.name), true);
    
    var token = localStorage.getItem("token");
    xhr.setRequestHeader("Authorization", 'Bearer ' + token);
    
    xhr.send(formData);
    this.pubsub.$pub("Picture Added");
  }
  progressHandler(event){
    this.progress = (event.loaded / event.total) * 100;
  }
  completeHandler(event){
    this.error = event.target.responseText;
    this.progress = 0;
  }
  errorHandler(event){
    this.error = "Upload Failed";
  }
  abortHandler(event){
    this.error = "Upload Aborted";
  }
}
