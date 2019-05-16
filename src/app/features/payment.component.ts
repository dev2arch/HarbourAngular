import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AtomPaynetz} from '../AtomPaynetz';
import {StudentDataService} from "../student-data.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[AtomPaynetz]
})
export class PaymentComponent implements OnInit {

  confirm = false;
  participants;
  accmodation;
  studentDataForm:  FormGroup;

  constructor( public paynetz:AtomPaynetz, public studentDataService: StudentDataService) { }

  ngOnInit() {
    this.accmodation = false;
    this.studentDataForm = new FormGroup({

      'event': new FormControl(null, Validators.required),
      'fee': new FormControl(null, Validators.required),
      'checkin': new FormControl('NotApplied'),
      'checkout': new FormControl('NotApplied'),
      'studentData': new FormArray([
      ])
    //               new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, Validators.required),
    //   'phone': new FormControl(null, Validators.required),
    //   'institute': new FormControl(null, Validators.required),
    //   'age': new FormControl(null, Validators.required),
    //   'gender': new FormControl(null, Validators.required),
    // }),
    })
  }

  onAddStudent(){
    const ctrlGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'institute': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
    });
    (<FormArray>this.studentDataForm.get('studentData')).push(ctrlGroup);
     console.log(this.studentDataForm)
  }

  onSubmit(){
    var fee;
    var days;
    var perStudentFee;
    if ( this.studentDataForm.value.checkin === 'NotApplied') {
      days = 0;
    } else {
      days = this.studentDataForm.value.checkout - this.studentDataForm.value.checkin
    }

   console.log(this.studentDataForm.value)
    var studentData = this.studentDataForm.value
    alert(studentData.studentData.length)
    if(studentData.event == 'Open Round'){
     fee = studentData.studentData.length * 590;
     perStudentFee = fee / studentData.studentData.length;


    }
    else if (studentData.event == 'Grand Finale'){
      fee = studentData.studentData.length * 413
      perStudentFee = fee / studentData.studentData.length;
      // alert(fee)
    }
    else if (studentData.event == 'Accmodation'){
      fee = studentData.studentData.length * 885 * days;
      perStudentFee = fee / studentData.studentData.length;

    }
    else if (studentData.event == 'OpenRound & Accmodation'){
      fee = (studentData.studentData.length * (590))+ (studentData.studentData.length * (885) * days);
      perStudentFee = fee / studentData.studentData.length;

    }
    else if (studentData.event == 'GrandFinale & Accmodation'){
      fee = (studentData.studentData.length * (413))+ (studentData.studentData.length * (885) * days);
      perStudentFee = fee / studentData.studentData.length;

    }
    alert(fee)
    var teamcode = Math.floor(Math.random()*90000) + 10000;
   for (var i in studentData.studentData){
     studentData.studentData[i].workshop = studentData.fee;
     studentData.studentData[i].event = studentData.event;
     studentData.studentData[i].teamcode = teamcode;
     studentData.studentData[i].fee = perStudentFee;
     studentData.studentData[i].totalfee = fee;
     studentData.studentData[i].checkin = this.studentDataForm.value.checkin;
     studentData.studentData[i].checkout = this.studentDataForm.value.checkout;
     console.log(studentData.studentData[i])
     this.studentDataService.postStudentData(studentData.studentData[i])
       .subscribe(
         (res) => console.log(res),
         (err) => console.log(err)
       );

   }
   // this.studentDataService.postStudentData(form.value)
   //   .subscribe(
   //     (res) => console.log(res),
   //     (err) => console.log(err)
   //   );
    this.callAtom(studentData.studentData, fee);
   this.studentDataService.getStudentData()
     .subscribe(
       (res: Response) => {
         const data = res.json();
         console.log(Object.values(data));
       },
       (err) => console.log(err)
     )

  }

  callAtom=function (f, stfee) {
    var txnid = Math.floor(Math.random()*90000) + 10000;
    let config = {
      "login": "53916",
      "pass":"43706559",
      "prodid":"HARBOUR",
      "mode":"live",
      "reqHashKey":"b815241222683f4d96",
      "resHashKey":"6ef0553b59c1b31ee8"
    };

    let data = {
      "txnid": txnid,
      "amt":stfee,
      "txncurr":"INR",
      "udf1":f[0].name,
      "udf2":f[0].email,
      "udf3":f[0].phone,
      "ttype":"NBFundTransfer",
      "clientcode":"dummy",
      "date":"20/11/2017 15:15:15"
    };
  console.log(data)
    this.paynetz.pay(config, data, this.paymentResCallback);

  }

  paymentResCallback(response) {
    alert(JSON.stringify(response));
  }
  confirmed(par){
    this.confirm = true;
    console.log(this.confirm,typeof (par))
    var newArray = [];
    for( var i = 0 ; i < par ; i++ ) {
      newArray.push({newKey: i});
    }
    this.participants = newArray
    console.log(this.participants)

  }
  onChange(value){
   if(value.toLowerCase().indexOf("accmodation") >= 0){
     this.accmodation = true;
   }
   else {
     this.accmodation = false;
   }
}


}
// https://payment.atomtech.in/paynetz/epi/fts?login=53916&pass=43706559&prodid=HARBOUR&txnid=123456&amt=100&txncurr=INR&udf1=Test Name&udf2=test@gmail.com&udf3=9999999999&ttype=NBFundTransfer&clientcode=dummy&date=20/11/2017 15:15:15&txnscamt=0&custacc=12345678&signature=ff0d9e78ee3362c11552dbe3c8b64183237bdc246796fcc3d34d9450424ddd7d516396fa7f50613cc49997f6d26cf377e35595238f3723ff45c1867d49f4d882&ru=https://payment.atomtech.in/mobilesdk/param
// https://payment.atomtech.in/paynetz/epi/fts?login=53916&pass=43706559&prodid=HARBOUR&txnid=123456&amt=100&txncurr=INR&udf1=Test Name&udf2=test@gmail.com&udf3=9999999999&ttype=NBFundTransfer&clientcode=dummy&date=20/11/2017 15:15:15&txnscamt=0&custacc=12345678&signature=d41315b83fe25fcd2d3ca9246e42cb594b8e1a4de76f8c478b88a901ff1e4fdf758d74cd89b31401d07eb792f988d7b3265b794ddf860bfe8123bcaa3c2a6298&ru=https://payment.atomtech.in/mobilesdk/param
