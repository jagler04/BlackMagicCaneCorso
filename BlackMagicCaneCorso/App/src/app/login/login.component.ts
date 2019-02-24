import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { PubSubService } from '../Services/pub-sub.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  invalidData: boolean = false;

constructor(private authService: AuthenticationService, private router:  Router,
  private pubsub: PubSubService) {
    pubsub.$sub("LogIn Attempt").subscribe((result) =>{
      if(authService.IsAuthenticated){
        this.invalidData = false;
        this.router.navigate(["EditDogList"]);
      }
      else{
        this.invalidData = true;
      }
    });
  
  }

  ngOnInit() {
  }
  login() {
    this.authService.Login(this.email, this.pass);
  }
}
