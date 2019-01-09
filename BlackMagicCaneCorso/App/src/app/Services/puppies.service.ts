import { Injectable } from '@angular/core';
import { PuppiesClient, RegistrationForm } from '../Clients/PuppiesClient';

@Injectable({
  providedIn: 'root'
})
export class PuppiesService {

  constructor(private puppiesService: PuppiesClient) { }

  public registerForPuppies(frm: RegistrationForm) {
    this.puppiesService.requestAPuppy(frm).subscribe(resp => { });
  }
}
