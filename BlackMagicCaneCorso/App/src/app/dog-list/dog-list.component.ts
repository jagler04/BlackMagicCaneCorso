import { Component, OnInit } from '@angular/core';
import { DogInfo } from '../Clients/PuppiesClient'
import { PuppiesService } from '../Services/puppies.service';
import { PubSubService } from '../Services/pub-sub.service';
import { MatDialog } from '@angular/material';
import { AddDogDialogComponent } from '../add-dog-dialog/add-dog-dialog.component';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  constructor(private puppiesService : PuppiesService, private pubsub: PubSubService,
    public dialog: MatDialog) { 
    pubsub.$sub("Dogs Updated").subscribe((data) => {
      this.Dogs = puppiesService.Dogs;
    })
  }

  Dogs : DogInfo[];

  ngOnInit() {
    this.puppiesService.GetDogs().subscribe(resp => {      
      this.Dogs = resp;   
    });
  }

  AddDog(){
    const dialogRef = this.dialog.open(AddDogDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
