import { Injectable } from '@angular/core';
import { AuthClient, LoginModel } from '../Clients/PuppiesClient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authClient: AuthClient) { }

  public Login(emailAddress: string, pass: string){
    return this.authClient.login(new LoginModel({
      email: emailAddress,
      password: pass
    }));
  }

}
