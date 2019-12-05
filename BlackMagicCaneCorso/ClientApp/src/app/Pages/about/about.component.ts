import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));
  }
}
