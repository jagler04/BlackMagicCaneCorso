import { Injectable } from '@angular/core';
import { PuppiesClient, RegistrationForm, DogInfo } from '../Clients/PuppiesClient';
import { Observable } from 'rxjs';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class PuppiesService {

  public Dogs : DogInfo[];
  constructor(private puppiesService: PuppiesClient, private pubsub: PubSubService) { }

  public registerForPuppies(frm: RegistrationForm) {
    this.puppiesService.requestAPuppy(frm).subscribe(resp => { });
  }

  public GetDogs() : Observable<DogInfo[] | null> {
    return this.puppiesService.get();
  }
  public GetDogsByGender(gender: string){
    return this.puppiesService.getByGender(gender);
  }
  public AddDog(newdog : DogInfo) {
    this.puppiesService.addPuppy(newdog).subscribe((resp : DogInfo[]) => {      
      this.Dogs = resp;
      this.pubsub.$pub("Dogs Updated");
    });
  }
  public UpdateDog(newdog : DogInfo) {
    this.puppiesService.updatePuppy(newdog).subscribe((resp : DogInfo[]) => {      
      this.Dogs = resp;
      this.pubsub.$pub("Dogs Updated");
    });
  }
  public DeleteDog(deleteDog: DogInfo){
    this.puppiesService.deletePuppy(deleteDog).subscribe((resp : DogInfo[]) => {      
      this.Dogs = resp;
      this.pubsub.$pub("Dogs Updated");
    });
  }
}
