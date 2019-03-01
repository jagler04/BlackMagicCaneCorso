import { Injectable } from '@angular/core';
import { PictureClient, DogInfo, FileParameter, PictureInfo } from '../Clients/PuppiesClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private pictureClient: PictureClient) { }

  public addPicture(dog: DogInfo, file: FileParameter): Observable<PictureInfo[] | null> {

    return this.pictureClient.addImage(dog.id, dog.name, file);
  }
}
