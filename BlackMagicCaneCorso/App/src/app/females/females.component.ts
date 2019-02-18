import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { dogInfo } from '../dog-info';
import { DogInfo } from '../Clients/PuppiesClient'
import { PuppiesService } from '../Services/puppies.service';

@Component({
  selector: 'app-females',
  templateUrl: './females.component.html',
  styleUrls: ['./females.component.css']
})
export class FemalesComponent implements OnInit {

  specificName: string;
  femaleDogs: DogInfo[];

  constructor(private route: ActivatedRoute, private puppiesService : PuppiesService) {
    this.route.params.subscribe( params => {
      if(params.Name){
        this.specificName = params.Name;
      }
    } );
    
  }

  ngOnInit() {
    this.puppiesService.GetDogsByGender("Female").subscribe(resp => {
      this.femaleDogs = resp;
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
