import { Component, OnInit, Input, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { DogModel } from 'src/app/Models/DogModel';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit, AfterViewInit {

  @Input()
  public dog: DogModel;

  public imageSets3: Array<Array<string>> = [];
  public imageSets6: Array<Array<string>> = [];
  
  @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
    var three: Array<string> = [];
    var six: Array<string> = [];
    this.dog.images.forEach(i => {
      three.push(i.url);
      six.push(i.url);
      if(three.length === 3){
        this.imageSets3.push(three);
        three = [];
      }
      if(six.length === 6){
        this.imageSets6.push(six);
        six = [];
      }
    });
    if(three.length > 0){
      this.imageSets3.push(three);
    }
    if(six.length > 0){
      this.imageSets6.push(six);
    }
  }

  ngAfterViewInit() {
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));
  }
}
