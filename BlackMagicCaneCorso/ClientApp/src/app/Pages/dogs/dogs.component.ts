import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/app/Services/dog.service';
import { DogModel } from '../../Clients/client';
import { PubSubService } from 'src/app/Services/pub-sub.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  public visibleDogs: Array<DogModel> = [];
  constructor(private route: ActivatedRoute, private dogService: DogService, private pubSub: PubSubService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params !== undefined) {
        if(this.dogService.Dogs.has("female")){
          this.setVisibleDogs(params);
        }
        else{
          this.pubSub.$sub("Dogs Loaded").subscribe( result =>{
            this.setVisibleDogs(params);
          })
        }
        
      }
    });
  }

  private setVisibleDogs(params){
    var gender = params["gender"];
    this.visibleDogs.length = 0;
    if(params["name"] !== undefined && params["name"] === 'All'){
      this.dogService.Dogs.get(gender).forEach(d => {
        if(d.name !== "All")
          this.visibleDogs.push(d);
      });
    }
    else{
      this.dogService.Dogs.get(gender).forEach(d => {
        if(d.name === params["name"]){
          this.visibleDogs.push(d);
        }
      });
    }
  }

}
