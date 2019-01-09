import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core'
import {NavService} from './nav.service';
import {NavItem} from './nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
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
      children: [
        {
          displayName: 'All Males',
          imgSource: '',
          route: 'males'
        },
        {
          displayName: 'Henny',
          imgSource: 'assets/images/henny3_orig.jpg',
          route: 'males/Henny'
        },
        {
          displayName: 'Omen',
          imgSource: '',
          route: 'males/Omen'
        }
      ]
    },
    {
      displayName: 'Females',
      iconName: '',
      route: 'females',
      children: [
        {
          displayName: 'All Females',
          imgSource: '',
          route: 'females'
        },
        {
          displayName: 'Voodoo',
          imgSource: 'assets/images/voo4.jpg',
          route: 'females/Voodoo'
        },
        {
          displayName: 'Koa',
          imgSource: 'assets/images/koa3.jpg',
          route: 'females/Koa'
        },
        {
          displayName: 'Harley',
          imgSource: 'assets/images/Harley1.jpg',
          route: 'females/Harley'
        },
        {
          displayName: 'Banshee',
          iconName: '',
          route: 'females/Banshee'
        }
      ]
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

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
