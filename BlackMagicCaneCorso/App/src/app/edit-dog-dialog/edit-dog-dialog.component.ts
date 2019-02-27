import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DogInfo } from '../Clients/PuppiesClient'
import { PuppiesService } from '../Services/puppies.service';

export interface editDialogData{
  dogData: DogInfo;
}

@Component({
  selector: 'app-edit-dog-dialog',
  templateUrl: './edit-dog-dialog.component.html',
  styleUrls: ['./edit-dog-dialog.component.css']
})
export class EditDogDialogComponent implements OnInit {

  dog: DogInfo;
  
  constructor(
    public dialogRef: MatDialogRef<EditDogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: editDialogData,
    private puppies: PuppiesService) {
      this.dog = data.dogData;
    }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  save(){
    this.puppies.UpdateDog(this.dog);
    this.dialogRef.close(true);
  }
}
