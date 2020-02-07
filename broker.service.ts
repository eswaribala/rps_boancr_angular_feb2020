import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BrokerService {


  message = new Subject<string>();
  constructor() { }


  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
  updateMessage(msg: string) {
    this.message.next(msg);
  }
}
