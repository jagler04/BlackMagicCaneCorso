import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  invalidData: boolean = false;

constructor(private authService: AuthenticationService, private router:  Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.Login(this.email, this.pass).subscribe((response) =>{
      let token = (<any>response).token;
      localStorage.setItem("token", token);
      this.invalidData = false;
      this.router.navigate(["EditDogList"]);
    }, (error) => {
      
    });
  }
}
