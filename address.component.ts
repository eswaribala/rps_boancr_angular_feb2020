import { Component, OnInit } from '@angular/core';
import {BrokerService} from "../services/broker.service";
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  name = 'Angular';
  constructor(private brokerService: BrokerService) { }
  ngOnInit() { }
  passInputData() {
    var button = document.querySelector('button');
    var keyups = fromEvent(button, 'click')
      .subscribe(value => {
        console.log(value);
        if (value.type === 'click') {
          console.log('input value: ', this.name);
          this.brokerService.updateMessage(this.name);
        }
      });
  }
}
