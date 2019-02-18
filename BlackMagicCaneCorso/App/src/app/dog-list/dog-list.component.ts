import { Component, OnInit } from '@angular/core';
import { DogInfo } from '../Clients/PuppiesClient'
import { PuppiesService } from '../Services/puppies.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  constructor(private puppiesService : PuppiesService) { }

  Dogs : DogInfo[];

  ngOnInit() {
    this.puppiesService.GetDogs().subscribe(resp => {      
      this.Dogs = resp;   
    });
  }

}
