import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApplicationModel } from '../../Clients/client'
import { ApplicationServiceService } from 'src/app/Services/application-service.service';
import { PubSubService } from 'src/app/Services/pub-sub.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  states: Array<string> = [
    "Alaska","Alabama","Arkansas","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Georgia",
    "Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan","Minnesota",
    "Missouri","Mississippi","Montana","North Carolina","North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada",
    "New York","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
    "South Dakota","Tennessee","Texas","Utah","Virginia","Vermont","Washington","Wisconsin","West Virginia","Wyoming"
  ];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  application: ApplicationModel = new ApplicationModel();
  firstName: string;
  lastName: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  showDog: string;
  otherActivities: string;
  therapyDog: string;
  emotionalSupport: string;
  breeding: string;
  couch: string;
  ownedBefore: string;
  yard: string;
  children: string;
  subissionSuccessful: boolean;

  errors: string;
  constructor(private applicationService: ApplicationServiceService, private pubsub: PubSubService) {
    this.pubsub.$sub("Application Submitted").subscribe( r => {
      this.subissionSuccessful = true;
    });
    this.pubsub.$sub("Application Error").subscribe(error => {
      console.log(error);
    });
   }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }

  public InvalidAddress(){
    if(this.street1 === undefined || this.street1 === ''){
      return true;
    }
    if(this.city === undefined || this.city === ''){
      return true;
    }
    if(this.state === undefined || this.state === ''){
      return true;
    }
    if(this.zip === undefined || this.zip === ''){
      return true;
    }
    return false;
  }

  public submit(){
    this.errors = '';
    if(this.firstName === undefined || this.firstName === ''){
      this.errors += 'First name';
    }
    if(this.lastName === undefined || this.lastName === ''){
      this.errors += this.errors.length > 0 ? ", Last name" : "Last name";
    }
    if(this.street1 === undefined || this.street1 === ''){
      this.errors += this.errors.length > 0 ? ", Street" : "Street";
    }
    if(this.city === undefined || this.city === ''){
      this.errors += this.errors.length > 0 ? ", City": "City";
    }
    if(this.state === undefined || this.state === ''){
      this.errors += this.errors.length > 0 ? ", State/Providence" : "State/Providence";
    }
    if(this.zip === undefined || this.zip === ''){
      this.errors += this.errors.length > 0 ? ", Zip/Postal code" : "Zip/Postal code";
    }
    if(this.email === undefined || this.email === ''){
      this.errors += this.errors.length > 0 ? ", Email" : "Email";
    }
    this.application = new ApplicationModel({
      firstName: this.firstName,
      lastName: this.lastName,
      street1: this.street1,
      street2: this.street2,
      city: this.city,
      state: this.state,
      zipcode: this.zip,
      phone: this.phone,
      email: this.email,
      showDog: this.showDog,
      otherActivities: this.otherActivities,
      therapyDog: this.therapyDog,
      emotionalSupport: this.emotionalSupport,
      breeding: this.breeding,
      couch: this.couch,
      ownedBefore: this.ownedBefore,
      yard: this.yard,
      children: this.children
    });
    if(this.firstName !== undefined && this.lastName !== undefined && this.street1 !== undefined
      && this.city !== undefined && this.zip != undefined && this.yard !== undefined && this.children !== undefined
      && this.email !== undefined && this.showDog !== undefined && this.otherActivities !== undefined
      && this.emotionalSupport !== undefined && this.breeding !== undefined && this.couch !== undefined){

      this.applicationService.Submit(this.application);
    }

    console.log(this.application);
  }
}
