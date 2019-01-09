import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { PuppiesService } from '../Services/puppies.service';
import { RegistrationForm } from '../Clients/PuppiesClient';

@Component({
  selector: 'app-puppy-application',
  templateUrl: './puppy-application.component.html',
  styleUrls: ['./puppy-application.component.css']
})
export class PuppyApplicationComponent implements OnInit {
  IsSubmitted: boolean = false;
  profileForm = new FormGroup({
    ContactInfo: new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Street: new FormControl(''),
      Street2: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      Zip: new FormControl(''),
      Country: new FormControl(''),
      PhoneNumber: new FormControl(''),
      Email: new FormControl('', [Validators.email])
    }),
    Understand: new FormControl(''),
    PuppyInfo: new FormGroup({
      CompanyHome: new FormControl(''),
      GenderPreference: new FormControl(''),
      // GenderPreference2: new FormControl(''),
      // ShowWorking: new FormControl(''),
      // Color: new FormControl('')
    }),
    // AboutFamily: new FormGroup({
    //   WhyInterest: new FormControl(''),
    //   FirstDog: new FormControl(''),
    //   FirstPuppy: new FormControl(''),
    //   OtherPets: new FormControl(''),
    //   HaveVet: new FormControl('')
    // }),
    DogPlan: new FormGroup({
      ShowRing: new FormControl(''),
      OtherFunThings: new FormControl(''),
      TherapyDog: new FormControl(''),
      ServiceDog: new FormControl(''),
      Breeding: new FormControl(''),
      CouchPotato: new FormControl('')
    }),
    // LivingArrangements: new FormGroup({
    //   TypeOfHousing: new FormControl(''),
    //   HousingPayType: new FormControl(''),
    //   FencedYard: new FormControl(''),
    //   CurrentlyServing: new FormControl(''),
    //   AdultCount: new FormControl(''),
    //   ChildCount: new FormControl(''),
    //   ChildrenUnder2: new FormControl(''),
    //   AllInAgreement: new FormControl(''),
    //   DogAllergies: new FormControl(''),
    //   PuppyTimeSpent: new FormControl('')
    // })
  });
  constructor(private puppiesService: PuppiesService) { }

  ngOnInit() {
    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);

    this.puppiesService.registerForPuppies(new RegistrationForm({
      firstName: this.profileForm.get('ContactInfo').get('FirstName').value,
      lastName: this.profileForm.get('ContactInfo').get('LastName').value,
      street: this.profileForm.get('ContactInfo').get('Street').value,
      street2: this.profileForm.get('ContactInfo').get('Street2').value,
      city: this.profileForm.get('ContactInfo').get('City').value,
      state: this.profileForm.get('ContactInfo').get('State').value,
      country: this.profileForm.get('ContactInfo').get('Country').value,
      zip: this.profileForm.get('ContactInfo').get('Zip').value,
      email: this.profileForm.get('ContactInfo').get('Email').value,
      phone: this.profileForm.get('ContactInfo').get('PhoneNumber').value,
      pronunciation: this.profileForm.get('Understand').value,
      companyHome: this.profileForm.get('PuppyInfo').get('CompanyHome').value,
      preferedGender: this.profileForm.get('PuppyInfo').get('GenderPreference').value,
      showCompetition: this.profileForm.get('DogPlan').get('ShowRing').value,
      agilityCompetition: this.profileForm.get('DogPlan').get('OtherFunThings').value,
      therapyDog: this.profileForm.get('DogPlan').get('TherapyDog').value,
      emotionalSupport: this.profileForm.get('DogPlan').get('ServiceDog').value,
      breeding: this.profileForm.get('DogPlan').get('Breeding').value,
      couchBuddy: this.profileForm.get('DogPlan').get('CouchPotato').value
    }));
    this.IsSubmitted = true;
  }

  valueChanged(){
    // console.log(this.profileForm);
    // console.log(this.profileForm.get('PuppyInfo').get('GenderPreference'));
    console.log(this.profileForm.get('PuppyInfo').get('GenderPreference').value);
  }
}
