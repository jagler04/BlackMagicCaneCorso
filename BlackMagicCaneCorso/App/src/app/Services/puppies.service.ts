import { Injectable } from '@angular/core';
import { PuppiesClient, RegistrationForm, Dog } from '../Clients/PuppiesClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuppiesService {

  public Dogs : Dog[];
  constructor(private puppiesService: PuppiesClient) { }

  public registerForPuppies(frm: RegistrationForm) {
    this.puppiesService.requestAPuppy(frm).subscribe(resp => { });
  }

  public GetDogs() : Observable<Dog[] | null> {
    return this.puppiesService.get();
  }
  public GetDogsByGender(gender: string){
    return this.puppiesService.getByGender(gender);
  }
  public AddDog(newdog : Dog) {
    this.puppiesService.addPuppy(newdog).subscribe((resp : Dog[]) => {      
      this.Dogs = resp;
    });
  }
  public UpdateDog(newdog : Dog) {
    this.puppiesService.updatePuppy(newdog).subscribe((resp : Dog[]) => {      
      this.Dogs = resp;
    });
  }
}
