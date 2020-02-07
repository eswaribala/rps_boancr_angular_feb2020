import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {BrokerService} from "../services/broker.service";

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {

  @Input() name: string;
  subscription: Subscription;
  currdate:Date=new Date();
  messagefromSibling: string[]=[];
  constructor(private brokerService: BrokerService) {
    console.log(this.messagefromSibling);
    this.subscription = this.brokerService.getMessage()
      .subscribe(message=> {
        console.log('Getting value from Data Sending component: ', message);

        this.messagefromSibling.push(message);
        this.currdate=new Date();
      });
  }
  ngOnInit() {

  }
}
