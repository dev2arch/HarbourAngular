import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.css']
})
export class PageBannerComponent implements OnInit {
  img;
  src;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.img = this.route.snapshot.routeConfig.path;
    }

}
