import { Injectable } from '@angular/core';
import { AuthClient, LoginModel } from '../Clients/PuppiesClient';
import { PubSubService } from './pub-sub.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelper
  constructor(private authClient: AuthClient, private pubsub: PubSubService){
    this.jwtHelper = new JwtHelper();
  }
  IsAuthenticated() : boolean{
    var token = localStorage.getItem("token");
 
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  public Login(emailAddress: string, pass: string){
    this.authClient.login(new LoginModel({
      email: emailAddress,
      password: pass
    })).subscribe((response) =>{
      console.log(response);
      let token = (<any>response).token;
      localStorage.setItem("token", token);
      this.pubsub.$pub("LogIn Attempt");
    }, (error) => {
      this.pubsub.$pub("LogIn Attempt Failed");
    });
  }
  public LogOut(){
    localStorage.removeItem("token");
    this.pubsub.$pub("Logged Out");
  }

}
