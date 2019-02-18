import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { dogInfo } from '../dog-info';
import { DogInfo } from '../Clients/PuppiesClient'
import { PuppiesService } from '../Services/puppies.service';

@Component({
  selector: 'app-males',
  templateUrl: './males.component.html',
  styleUrls: ['./males.component.scss']
})
export class MalesComponent implements OnInit {

  specificName: string;
  maleDogs: DogInfo[];

  constructor(private route: ActivatedRoute, private puppiesService : PuppiesService) {
    this.route.params.subscribe( params => {
      if(params.Name){
        this.specificName = params.Name;
      }
    } );
    
   }

  ngOnInit() {
    this.puppiesService.GetDogsByGender("Male").subscribe(resp => {
      this.maleDogs = resp;
    });
  }

  canShow(dogName:string): boolean{
    if (!this.specificName)
      return true;
    if(this.specificName === dogName)
      return true;
    return false;
  }
}
