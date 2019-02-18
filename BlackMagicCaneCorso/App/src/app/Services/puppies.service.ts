import { Injectable } from '@angular/core';
import { PuppiesClient, RegistrationForm, Dog } from '../Clients/PuppiesClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuppiesService {

  constructor(private puppiesService: PuppiesClient) { }

  public registerForPuppies(frm: RegistrationForm) {
    this.puppiesService.requestAPuppy(frm).subscribe(resp => { });
  }

  public GetDogs() : Observable<Dog[] | null> {
    return this.puppiesService.get();
  }
}
