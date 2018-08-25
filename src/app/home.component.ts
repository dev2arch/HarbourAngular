import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 workshops;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.workshops = [
    {cat:"Computer Science",
     link:"/workshops/cs"
    },
      {cat:"Information Technology",
        link:"/workshops/cs"},
      {cat:"Electrical& Electronics",
        link:"/workshops/ece"},
      {cat:"Mechanical",
        link:"/workshops/me"},
      {cat:"Robotics",
        link:"/workshops/robotics"},
      {cat:"Civil",
        link:"/workshops/civil"}
    ]

  }
  getBackground(image){
    return this.sanitizer.bypassSecurityTrustUrl(image)

  }
}
