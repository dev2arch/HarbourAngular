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
        name: "Android Apps Development",
        pdf: "http://www.harbourtech.co.in/workshops/app.pdf",
        img: "../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png"
      },
      {
        name: "Cyber Security",
        pdf: "http://www.harbourtech.co.in/workshops/app.pdf",
        img: "../../assets/images/ethical-hacking-workshop-300x200.jpg"
      },
      {
        name: "Cloud Computing",
        pdf: "http://www.harbourtech.co.in/workshops/cloud.pdf",
        img: "../../assets/images/Cloud-Computing-cap-1024x1024-300x200.jpg"
      },
      {
        name: "Web Designing",
        pdf: "http://www.harbourtech.co.in/workshops/web.pdf",
        img: "../../assets/images/web-design-1024x943-300x200.jpg"
      },
      {
        name: "Python",
        pdf: "http://www.harbourtech.co.in/workshops/python.pdf",
        img: "../../assets/images/pythonlogo-300x200.jpg"
      },
      {
        name: "Big Data",
        pdf: "http://www.harbourtech.co.in/workshops/python.pdf",
        img: "../../assets/images/HadoopCloud1-300x200.png"
      },
      {
        name: "Digital Marketing",
        pdf: "http://www.harbourtech.co.in/workshops/digital.pdf",
        img: "../../assets/images/digital-1024x495-300x200.jpg"
      },
      {
        name: "IOT",
        pdf: "#",
        img: "../../assets/images/internetofthings-1024x1024-300x200.jpg"
      }
    ]


  }
}
