import { Injectable } from '@angular/core';
import { ImageModel } from '../Models/ImageModel';
import { Client, DogModel } from '../Clients/client';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  public Dogs: Map<string, Array<DogModel>> = new Map<string, Array<DogModel>>();
  constructor(private brtClient: Client, private pubsub: PubSubService) { 
    this.brtClient.dog().subscribe(result => {
      this.Dogs = new Map<string, Array<DogModel>>();
      result.forEach(dog =>{
        if(this.Dogs.has(dog.gender)){
          this.Dogs.get(dog.gender).push(dog);
        }
        else{
          this.Dogs.set(dog.gender, [dog]);
        }
      });
      this.pubsub.$pub("Dogs Loaded");
    });
  }
}
