import { Component, OnInit, Input, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { DogService } from 'src/app/Services/dog.service';
import * as M from "materialize-css/dist/js/materialize";
import { ActivatedRoute } from '@angular/router';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { DogModel } from 'src/app/Clients/client';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss']
})
export class EditDogComponent implements OnInit, AfterViewInit {

  public dog: DogModel;

  public imageSets3: Array<Array<string>> = [];
  public imageSets6: Array<Array<string>> = [];

  @ViewChildren('materialboxed') materialboxed: QueryList<ElementRef>;
  @ViewChildren('tooltipped') tooltipped: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private dogService: DogService, private pubSub: PubSubService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params !== undefined) {
        if(this.dogService.Dogs.has("Female")){
          if(this.findDog(params["id"])){
            this.seperateImages();
          }
        }
        else{
          this.pubSub.$sub("Dogs Loaded").subscribe( result =>{
            if(this.findDog(params["id"])){
              this.seperateImages();
            }
          })
        }
        
      }
    });
    
  }

  private seperateImages(){
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
    console.log(this.imageSets3);
    console.log(this.imageSets6);
  }
  private findDog(id: string): Boolean{
    var dogId = Number(id);
    this.dogService.Dogs.forEach(genders => {
      genders.forEach(dog => {
        if(dog.id === dogId){
          this.dog = dog;
        }
      });
    });
    if(this.dog !== null){
      return true;
    }
    console.log("returning false");
    return false;
  }

  ngAfterViewInit() {
    const imgArray = this.materialboxed.toArray();
    imgArray.forEach((image) => M.Materialbox.init(image.nativeElement));
    const tool = this.tooltipped.toArray();
    tool.forEach((t) => M.Tooltip.init(t.nativeElement));
  }

  public AddImage(){
    console.log("test");
  }
}
