import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PubSubService } from '../Services/pub-sub.service';

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
    public dialogRef: MatDialogRef<LoginDialogComponent>, private pubsub: PubSubService) {
      pubsub.$sub("LogIn Attempt").subscribe((data) =>{
        if(authService.IsAuthenticated){
          this.invalidData = false;
          this.dialogRef.close(true);
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
