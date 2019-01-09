import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { dogInfo } from '../dog-info';

@Component({
  selector: 'app-males',
  templateUrl: './males.component.html',
  styleUrls: ['./males.component.scss']
})
export class MalesComponent implements OnInit {

  specificName: string;
  maleDogs: dogInfo[];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if(params.Name){
        this.specificName = params.Name;
      }
    } );
    
   }

  ngOnInit() {
    this.maleDogs = [
      {
        Name: "Henny",
        About: 'Henny" is our only stud at the moment. He is from our first litter born 10/04/2015. He is an impressive example of the breed, exhibiting proper movement, type and size. He has had his PennHip and OFA Elbow testing completed and is available to health tested females. Henny recently went Winners Dog at the 2018 ICCF extravaganza over 26 other top males in the country and won Bred-by Male Class 3/4 shows.',
        Health: "Health Testing is very important and Henny will have more complete testing done soon.",
        Temperment: 'Henny is a strong, stable protective male. He is not overly-driven and when not showing is a couch potato. Henny over-all is very "Corso" temperament. He loves being a show dog and the center of attention!',
        PedigreeURL: "http://canecorsopedigree.com/modules/animal/mpedigree.php?pedid=67010",
        Images: [
          "assets/images/henny/Henny1.jpg",
          "assets/images/henny/henny2_orig.jpg",
           "assets/images/henny/henny3.jpg",
           "assets/images/henny/Hennywin.jpg",
           "assets/images/henny/henny3_orig.jpg",
           "assets/images/henny/Henny4.jpg",
           "assets/images/henny/HennyICCF.jpg"
          ],
        TitlesWon: "Breeder Owner Handled AKC (GCH pointed) UKC (GCH pointed) IntCH ICCF CH Black Magic's In it to Win It CGC CCAT",
        PennHip: "80%",
        OFAElbows: "Normal",
        OFACardio: "Pending will be done in 2018",
        OFAPatella: "Normal",
        OFAEyes: "Pending" 
      },
      {
        Name: "Omen",
        About: 'Information coming soon.',
        Health: "Health Testing is very important and Omen will be tested before being bred.",
        Temperment: 'Omen is a very motivated hjard working dog.',
        PedigreeURL: "",
        Images: [],
        TitlesWon: "",
        PennHip: "Pending",
        OFAElbows: "Pending",
        OFACardio: "Pending",
        OFAPatella: "Pending",
        OFAEyes: "Pending" 
      }
    ];
  }

  canShow(dogName:string): boolean{
    if (!this.specificName)
      return true;
    if(this.specificName === dogName)
      return true;
    return false;
  }
}
