import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren  } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));
  }
}
