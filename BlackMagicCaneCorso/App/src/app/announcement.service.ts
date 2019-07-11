import { Injectable } from '@angular/core';
import { AnnouncementClient, AnnouncementModel } from './Clients/PuppiesClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private client: AnnouncementClient) { }

  public Get(): Observable<AnnouncementModel[] | null>{
    return this.client.getAnnouncement();
  }
  public Add(announcement: string): Observable<AnnouncementModel[]> {
    return this.client.addAnnouncement(announcement);
  }
  public Update(id: number, updateText: string) : Observable<AnnouncementModel[]>{
    return this.client.updateAnnouncement(id, updateText);
  }
}
