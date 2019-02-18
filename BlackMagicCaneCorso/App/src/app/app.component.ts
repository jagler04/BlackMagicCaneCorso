import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core'
import {NavService} from './nav.service';
import {NavItem} from './nav-item';
import { PuppiesService } from './Services/puppies.service';
import { DogInfo } from './Clients/PuppiesClient'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  Dogs : DogInfo[];

  beginningItems: NavItem[] = [{
    displayName: 'Home',
    iconName: 'home',
    route: 'home'
  },
  {
    displayName: 'Puppies',
    iconName: '',
    route: 'puppies'
  },
  {
    displayName: 'Puppy Application',
    iconName: '',
    route: 'application'
  }];
  endingItems: NavItem[] = [
    {
      displayName: 'Breed Standard',
      iconName: '',
      route: 'breed'
    },
    {
      displayName: 'About Us',
      iconName: '',
      route: 'about'
    }
  ]
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'home'
    },
    {
      displayName: 'Puppies',
      iconName: '',
      route: 'puppies'
    },
    {
      displayName: 'Puppy Application',
      iconName: '',
      route: 'application'
    },
    {
      displayName: 'Males',
      iconName: '',
      route: 'males',
      children: []
    },
    {
      displayName: 'Females',
      iconName: '',
      route: 'females',
      children: []
    },
    {
      displayName: 'Breed Standard',
      iconName: '',
      route: 'breed'
    },
    {
      displayName: 'About Us',
      iconName: '',
      route: 'about'
    }
  ];

  constructor(private navService: NavService, private puppiesService : PuppiesService) {
  }

  ngOnInit(): void {
    this.puppiesService.GetDogs().subscribe(resp => {      
      this.Dogs = resp;
      if(this.Dogs){
        this.MakeNav();
      }
      else{

      }
      
    });
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  private MakeNav(){
    var males: NavItem = {
      displayName: 'Males',
      iconName: '',
      route: 'males',
      children: [
        {
          displayName: 'All Males',
          imgSource: '',
          route: 'males'
        }
      ]
    };
    var females: NavItem = {
      displayName: 'Females',
      iconName: '',
      route: 'females',
      children: [
        {
          displayName: 'All Females',
          imgSource: '',
          route: 'females'
        }
      ]
    };
    this.Dogs.forEach((dog) => {
      console.log(dog);
      var profileIndex = dog.pictures != undefined ? dog.pictures.findIndex(p => p.profilePic) : -1;
      if(dog.gender === "Female"){
        females.children.push({
          displayName: dog.name,
          imgSource: profileIndex != -1 ? dog.name +"/" + dog.pictures[profileIndex].fileName : "",
          route: 'females/' + dog.name
        })
      }
      else
      {
        males.children.push({
          displayName: dog.name,
          imgSource: profileIndex != -1 ? dog.name +"/" + dog.pictures[profileIndex].fileName : "",
          route: 'males/' + dog.name
        })
      }

    });

    this.navItems = [];
    this.beginningItems.forEach(item =>{
      this.navItems.push(item)
    });
    this.navItems.push(males);
    this.navItems.push(females);
    this.endingItems.forEach(item => {
      this.navItems.push(item)
    })

  }
}
