import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshopData;

  constructor() {
  }

  ngOnInit() {
    this.workshopData = [
      {
        name: 'Android Apps Development',
        pdf: 'http://www.harbourtech.co.in/workshops/app.pdf',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: 'cs'
      },
      {
        name: 'Cyber Security',
        pdf: 'http://www.harbourtech.co.in/workshops/app.pdf',
        img: '../../assets/images/ethical-hacking-workshop-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Cloud Computing',
        pdf: 'http://www.harbourtech.co.in/workshops/cloud.pdf',
        img: '../../assets/images/Cloud-Computing-cap-1024x1024-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Web Designing',
        pdf: 'http://www.harbourtech.co.in/workshops/web.pdf',
        img: '../../assets/images/web-design-1024x943-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Python',
        pdf: 'http://www.harbourtech.co.in/workshops/python.pdf',
        img: '../../assets/images/pythonlogo-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Big Data',
        pdf: 'http://www.harbourtech.co.in/workshops/python.pdf',
        img: '../../assets/images/HadoopCloud1-300x200.png',
        cat: 'cs'
      },
      {
        name: 'Digital Marketing',
        pdf: 'http://www.harbourtech.co.in/workshops/digital.pdf',
        img: '../../assets/images/digital-1024x495-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'IOT',
        pdf: '#',
        img: '../../assets/images/internetofthings-1024x1024-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Matlab',
        pdf: '#',
        img: '../../assets/images/matlab.jpg',
        cat: 'ece'
      },
      {
        name: 'Ardunio',
        pdf: 'http://www.harbourtech.co.in/workshops/Arduino.pdf',
        img: '../../assets/images/ardunio.jpg',
        cat: 'ece'
      },
      {
        name: 'Rasberry Pi',
        pdf: 'http://www.harbourtech.co.in/workshops/rasp.pdf',
        img: '../../assets/images/rasbarry.jpg',
        cat: 'ece'
      },
      {
        name: 'Embedded System',
        pdf: '#',
        img: '../../assets/images/embedded.jpg',
        cat: 'ece'
      },
      {
        name: 'Python',
        pdf: 'http://www.harbourtech.co.in/workshops/python.pdf',
        img: '../../assets/images/pythonlogo-300x200.jpg',
        cat: 'ece'
      },
      {
        name: 'Quadcopter',
        pdf: 'http://www.harbourtech.co.in/workshops/quadcopter.pdf',
        img: '../../assets/images/quadcopter.jpg',
        cat: 'ece'
      },
      {
        name: 'Solar Panel',
        pdf: '#',
        img: '../../assets/images/solarpanel.jpg',
        cat: 'ece'
      },
      {
        name: 'PLC/SCADA',
        pdf: '#',
        img: '../../assets/images/plc.jpg',
        cat: 'ece'
      },
      {
        name: 'Quadcopter',
        pdf: 'http://www.harbourtech.co.in/workshops/quadcopter.pdf',
        img: '../../assets/images/quadcopter.jpg',
        cat: 'me'
      },
      {
        name: 'Solar Panel',
        pdf: '#',
        img: '../../assets/images/solarpanel.jpg',
        cat: 'me'
      },
      {
        name: 'Solar Panel',
        pdf: '#',
        img: '../../assets/images/solarpanel.jpg',
        cat: 'me'
      },
    ];


  }
}
