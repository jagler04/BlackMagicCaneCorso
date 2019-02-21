import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  email: string;
  pass: string;
  invalidData: boolean = false;
  constructor(private authService: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

  login() {
    this.authService.Login(this.email, this.pass).subscribe((response) =>{
      let token = (<any>response).token;
      localStorage.setItem("token", token);
      this.invalidData = false;
      this.dialogRef.close(true);
    }, (error) => {
      
    });
  }
}
