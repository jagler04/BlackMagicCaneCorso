import { Component, OnInit } from '@angular/core';
import { DogInfo } from '../Clients/PuppiesClient';
import { PuppiesService } from '../Services/puppies.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-dog-dialog',
  templateUrl: './add-dog-dialog.component.html',
  styleUrls: ['./add-dog-dialog.component.css']
})
export class AddDogDialogComponent implements OnInit {

  dog: DogInfo = new DogInfo();
  constructor(public dialogRef: MatDialogRef<AddDogDialogComponent>,
    private puppies: PuppiesService) { }

  ngOnInit() {
  }

  
  cancel() {
    this.dialogRef.close(false);
  }

  save(){
    this.puppies.AddDog(this.dog);
    this.dialogRef.close(true);
  }
}
