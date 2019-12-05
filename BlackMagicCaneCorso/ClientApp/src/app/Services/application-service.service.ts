import { Injectable } from '@angular/core';
import { ApplicationModel, Client } from '../Clients/client';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private appClient: Client, private pubsub: PubSubService) { }

  public Submit(application: ApplicationModel){
    this.appClient.application(application).subscribe(r => {
      this.pubsub.$pub("Application Submitted");
    }, error =>{
      this.pubsub.$pub("Application Error", error);
    });
  }
}
