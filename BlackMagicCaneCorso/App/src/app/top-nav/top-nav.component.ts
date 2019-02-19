import { Component, OnInit } from '@angular/core';
import {NavService} from '../Services/nav.service';
import { PubSubService } from 'angular7-pubsub'
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  authenticated: boolean = false;

  constructor(public navService: NavService, private pubsub: PubSubService, private authService: AuthenticationService) {
    pubsub.$sub('CheckAuthentication', () => {
      
    });
  }


  ngOnInit() {
  }

}
