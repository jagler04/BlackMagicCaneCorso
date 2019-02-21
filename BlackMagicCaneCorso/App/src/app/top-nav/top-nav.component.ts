import { Component, OnInit } from '@angular/core';
import {NavService} from '../Services/nav.service';
import { AuthenticationService } from '../Services/authentication.service';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  authenticated: boolean = false;

  constructor(public navService: NavService, private authService: AuthenticationService,
    public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
  }
  login(){
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.authenticated = true;
        this.router.navigate(["EditDogList"]);
      }
    });
  }
  logOut() {
    localStorage.removeItem("token");
    this.authenticated = false;
 }
}
