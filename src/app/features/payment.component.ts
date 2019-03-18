import { Component, OnInit } from '@angular/core';
import {AtomPaynetz} from '../AtomPaynetz';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[AtomPaynetz]
})
export class PaymentComponent implements OnInit {

  constructor( public paynetz:AtomPaynetz) { }

  ngOnInit() {
  }

  callAtom=function () {
    let config = {
      "login": "53916",
      "pass":"Harbour@123",
      "prodid":"HARBOUR",
      "mode":"live",
      "reqHashKey":"b815241222683f4d96",
      "resHashKey":"6ef0553b59c1b31ee8"
    };

    let data = {
      "txnid":"123456",
      "amt":"100",
      "txncurr":"INR",
      "udf1":"Test Name",
      "udf2":"test@gmail.com",
      "udf3":"9999999999",
      "ttype":"NBFundTransfer",
      "clientcode":"dummy",
      "date":"20/11/2017 15:15:15"
    };

    this.paynetz.pay(config, data, this.paymentResCallback);

  }

  paymentResCallback(response){
    alert(JSON.stringify(response));
  }


}
