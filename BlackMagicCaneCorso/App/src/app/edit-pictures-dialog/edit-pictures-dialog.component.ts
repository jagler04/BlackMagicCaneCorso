import { Component, OnInit, Inject } from '@angular/core';
import { DogInfo, FileParameter } from '../Clients/PuppiesClient';
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
        this.dog.pictures = pictureService.Pictures;
        this.selectedFiles.shift();
        if(this.selectedFiles.length > 0){
          //this.AddPicture(this.selectedFiles[0]);
        }
      });
      pubsub.$sub("Picture Deleted").subscribe(() =>{
        this.dog.pictures = pictureService.Pictures;
      });
    }

  ngOnInit() {
  }

  file: any;
  progress: number;
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
    xhr.send(formData);
    this.pubsub.$pub("Picture Added");
    // const uploadReq = new HttpRequest('POST', "/Picture/Add?dogId=" + encodeURIComponent("" + this.dog.id) + "&dogName=" + encodeURIComponent("" + this.dog.name), formData, {
    //   reportProgress: true,
    //   headers: new HttpHeaders({"Content-Type": undefined})
    // });

    // this.http.request(uploadReq).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     this.progress = Math.round(100 * event.loaded / event.total);
    //   }
    // });
  }
  progressHandler(event){
    this.progress = (event.loaded / event.total) * 100;
  }
  completeHandler(event){
    this.error = event.target.responseText;
  }
  errorHandler(event){
    this.error = "Upload Failed";
  }
  abortHandler(event){
    this.error = "Upload Aborted";
  }
  // FileChange(event: any): void{
  //   this.selectedFiles = event.target.files;
  //   if( this.selectedFiles && this.selectedFiles.length > 0){
  //     this.AddPicture(this.selectedFiles[0]);
  //   }
  // }
  // AddPicture(file: File){
  //   var upFile: FileParameter = {
  //     data: file,
  //     fileName: file.name
  //   };
  //   this.pictureService.addPicture(this.dog, upFile);
  // }
}
