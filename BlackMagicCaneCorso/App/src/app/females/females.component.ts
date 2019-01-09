import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { dogInfo } from '../dog-info';

@Component({
  selector: 'app-females',
  templateUrl: './females.component.html',
  styleUrls: ['./females.component.css']
})
export class FemalesComponent implements OnInit {

  specificName: string;
  femaleDogs: dogInfo[];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if(params.Name){
        this.specificName = params.Name;
        console.log(this.specificName);
      }
    } );
    
  }

  ngOnInit() {
    this.femaleDogs = [
      {
        Name: "Voodoo",
        About: 'Voodoo is my foundation female and my heart dog. She is my first Corso and before the age of 24 months, I accomplished 9 titles on her. She has had 2 litters and her offspring inherit her strong stable temperament. She is health tested and exactly what I believe a Corso should be.',
        Health: "She is health tested and exactly what I believe a Corso should be.",
        Temperment: 'Voodoo over-all is very "Corso" temperament.',
        PedigreeURL: "http://www.canecorsopedigree.com/modules/animal/dog.php?id=37895",
        Images: [
          "assets/images/voodoo/voodoo1.jpg",
          "assets/images/voodoo/voo1.jpg",
           "assets/images/voodoo/voo2.jpg",
           "assets/images/voodoo/voo3.jpg",
           "assets/images/voodoo/voo4.jpg"
          ],
        TitlesWon: "U-CA AKC (GCH pointed) UKC (GCH pointed) IntCH CH NorthStar's Ready or Not CA CGCA CGCU CCAT TT",
        PennHip: "90%",
        OFAElbows: "Normal",
        OFACardio: "Normal",
        OFAPatella: "Normal",
        OFAEyes: "Normal" 
      },
      {
        Name: "Koa",
        About: 'Koa is from my 2016 breeding between GCH Fearless Optimus Prime (Old american x Mad River line) and my foundation bitch Voodoo. She lives in our home.',
        Health: "Will be health tested this Spring and will be Bred this Spring 2019.",
        Temperment: 'Koa is very loving and does not have a typical temperment for a corso.',
        PedigreeURL: "http://www.canecorsopedigree.com/modules/animal/dog.php?id=57318",
        PedigreeURL2: "http://www.canecorsopedigree.com/modules/animal/dog.php?id=37895",
        Images: [
          "assets/images/koa/koa4.jpg",
          "assets/images/koa/KOA1 (1).jpg",
           "assets/images/koa/Koa1.jpg",
           "assets/images/koa/Koa2 (1).jpg",
           "assets/images/koa/KOA2.jpg",
           "assets/images/koa/KOA3.jpg"
          ],
        TitlesWon: "UKC CH Black Magic's Killin It On Arrival CGC",
        PennHip: "Pending",
        OFAElbows: "Pending ",
        OFACardio: "Pending ",
        OFAPatella: "Pending ",
        OFAEyes: "Pending " 
      },
      {
        Name: "Harley",
        About: 'Harley is a full sister to KOA. She just started her AKC show career and is co owned with a family in WA state. Harley will be bred in 2018. She will be bred to GCH McLovin Winter 2018.',
        Health: "Will be health tested this Spring and will be Bred this Spring 2019.",
        Temperment: '',
        PedigreeURL: "http://www.canecorsopedigree.com/modules/animal/dog.php?id=57318",
        PedigreeURL2: "http://www.canecorsopedigree.com/modules/animal/dog.php?id=37895",
        Images: [
          "assets/images/harley/Harley1.jpg",
          "assets/images/harley/Harley2.jpg",
           "assets/images/harley/Harley1 (1).jpg"
          ],
        TitlesWon: "Black Magic's Harley Quinn",
        PennHip: "Above breed avg Mild DJD",
        OFAElbows: "Normal ",
        OFACardio: "Normal ",
        OFAPatella: "",
        OFAEyes: "" 
      },
      {
        Name: "Banshee",
        About: 'Banshee is my pick female from my bred-by Multi Champion Henny and our a bitch named Gretchen. She is an essential part of my program as she is the start of my second generation.',
        Health: "",
        Temperment: 'She is very sweet, drivey and is a carbon copy structure wise of her sire, Henny.',
        Images: [
          "assets/images/banshee/Banshee1.jpg",
          "assets/images/banshee/Bansheeandhenny.jpg"
          ],
        TitlesWon: "AKC UKC IntlCH ICCF CH Black Magic's In It To Win It CGC CCAT x Gretchen",
        PennHip: "",
        OFAElbows: "",
        OFACardio: "",
        OFAPatella: "",
        OFAEyes: "" 
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
