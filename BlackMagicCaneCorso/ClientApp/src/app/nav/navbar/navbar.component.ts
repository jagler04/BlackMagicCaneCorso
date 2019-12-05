import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DogService } from 'src/app/Services/dog.service';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private options = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  }
  constructor(public dogService: DogService) { }

  ngOnInit() {
  }

  close(){
    var sideNavOverlay = document.getElementsByClassName('sidenav-overlay')[0] as HTMLElement;
    sideNavOverlay.click();
  }

  ngAfterViewInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, this.options);
  }
}
