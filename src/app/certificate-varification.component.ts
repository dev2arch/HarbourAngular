import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {StudentDataService} from './student-data.service';

@Component({
  selector: 'app-certificate-varification',
  templateUrl: './certificate-varification.component.html',
  styleUrls: ['./certificate-varification.component.css']
})
export class CertificateVarificationComponent implements OnInit {
  data: any;
  isVerified: boolean;
  studentName: string;
  collegeName: string;
  crtificateType: string;
  certificateNumber: string;
  workshopName: string
  notFound: boolean


  constructor( private dataService: StudentDataService) {
    this.isVerified = false;
    this.notFound = false;
  }

  ngOnInit() {
    this.dataService.getJSON().subscribe(
      (res) => {this.data = res.data; },
    (err) => console.log(err)
      );
  }
  public verify(certificate: NgForm) {
    this.notFound = true;
    this.isVerified = false;
    console.log(certificate.value);
    const number = certificate.value.certificatenumber
    for (let i in this.data) {
      // const number = 'TR2691'
      if (number === this.data[i].number) {
        this.notFound = false;
        console.log(this.data[i].number, this.data[i].name, this.data[i].college );
        this.studentName = this.data[i].name;
        this.collegeName = this.data[i].college;
        this.certificateNumber = this.data[i].number;
        this.crtificateType = this.data[i].type;
        this.workshopName = this.data[i].module;
        this.isVerified = true;
      }
    }
  }

}
