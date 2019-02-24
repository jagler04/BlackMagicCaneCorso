import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  //map of all events and their corrisponding observable
  private events: Map<string, Subject<any>>;
  constructor(){
      this.events = new Map<string, Subject<any>>();
  }

  ngOnDestroy(){
      this.events.clear();
  }
  $pub(eventName: string, object: any = undefined){
      if(!this.events.has(eventName)){
          this.events.set(eventName, new Subject<any>());
      }
      this.events.get(eventName).next(object);
  }
  $sub(eventName: string, newOnly: boolean = true): Observable<any>{
      if(!this.events.has(eventName)) {
          this.events.set(eventName, new Subject<any>());
      }
      return this.events.get(eventName);
  }
}
