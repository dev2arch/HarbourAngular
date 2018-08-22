import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techradiance',
  templateUrl: './techradiance.component.html',
  styleUrls: ['./techradiance.component.css']
})
export class TechradianceComponent implements OnInit {
  workshops;
  filter = 'All'

  constructor() { }

  ngOnInit() {
    this.workshops= [
      {
      name: 'Solar & Smart Energy Systems',
      img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
      cat: '6to12',
      fee:'1200 INR Per Participant'
    },
      {
        name: 'Cyber Security ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'999 INR Per Participant'
      },
      {
        name: 'Android Apps. Development',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'999 INR Per Participant'
      },
      {
        name: ' Plug & Play lOT',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'1300 INR Per Participant'
      },
      {
        name: ' Auto-Robotics',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'999 INR Per Participant'
      },
      {
        name: ' Web Designing  ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '8to12',
        fee:'1200 INR Per Participant'
      },
      {
        name: 'Quad Copter ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '8to12',
        fee:'900 INR Per Participant'
      },
      {
        name: 'Mobile Controlled Robotics ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'1200 INR Per Participant'
      },
      {
        name: 'Home Automation  ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'1200 INR Per Participant'
      },
      {
        name: 'Arduino Robotics   ',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: '6to12',
        fee:'1200 INR Per Participant'
      }
    ]
  }
  setFilter(val){
    this.filter = val
  }

}
