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
      "pass":"43706559",
      "prodid":"HARBOUR",
      "mode":"live",
      "reqHashKey":"815241222683f4d96",
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
// https://payment.atomtech.in/paynetz/epi/fts?login=53916&pass=43706559&prodid=HARBOUR&txnid=123456&amt=100&txncurr=INR&udf1=Test Name&udf2=test@gmail.com&udf3=9999999999&ttype=NBFundTransfer&clientcode=dummy&date=20/11/2017 15:15:15&txnscamt=0&custacc=12345678&signature=ff0d9e78ee3362c11552dbe3c8b64183237bdc246796fcc3d34d9450424ddd7d516396fa7f50613cc49997f6d26cf377e35595238f3723ff45c1867d49f4d882&ru=https://payment.atomtech.in/mobilesdk/param
// https://payment.atomtech.in/paynetz/epi/fts?login=53916&pass=43706559&prodid=HARBOUR&txnid=123456&amt=100&txncurr=INR&udf1=Test Name&udf2=test@gmail.com&udf3=9999999999&ttype=NBFundTransfer&clientcode=dummy&date=20/11/2017 15:15:15&txnscamt=0&custacc=12345678&signature=d41315b83fe25fcd2d3ca9246e42cb594b8e1a4de76f8c478b88a901ff1e4fdf758d74cd89b31401d07eb792f988d7b3265b794ddf860bfe8123bcaa3c2a6298&ru=https://payment.atomtech.in/mobilesdk/param
