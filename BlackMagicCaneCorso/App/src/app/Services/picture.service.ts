import { Injectable } from '@angular/core';
import { PictureClient, DogInfo, PictureInfo } from '../Clients/PuppiesClient';
import { Observable } from 'rxjs';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  Pictures:PictureInfo[];
  
  constructor(private pictureClient: PictureClient, private pubsub: PubSubService) { }

  public addPicture(dog: DogInfo) {

    // return this.pictureClient.addImage(dog.id, dog.name, dog.titles, dog.color, dog.biteType, dog.weight, 
    //   dog.description, dog.birthdate, dog.gender, [], ).subscribe((result) =>{
    return this.pictureClient.addImage(dog.id, dog.name ).subscribe((result) =>{
      this.Pictures = result;
      this.pubsub.$pub("Picture Added");
    });
  }
  public DelegePicture(img: PictureInfo){
    return this.pictureClient.deleteImage(img).subscribe((result) => {
      this.Pictures = result;
      this.pubsub.$pub("Picture Deleted");
    });
  }
  public MakeProfilePicture(dogId:number, imgId: number){
    return this.pictureClient.setProfilePicture(dogId, imgId).subscribe(result => {
      this.Pictures = result;
      this.pubsub.$pub("Profile Picture Updated");
    });
  }
  public GetPictures(id: number): Observable<PictureInfo[] | null>{
    return this.pictureClient.getImages(id)
  }
}
