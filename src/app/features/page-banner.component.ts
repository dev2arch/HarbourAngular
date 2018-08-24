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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let s = this.route.snapshot.routeConfig.path;
    const n = s.indexOf('/');
    s = s.substring(0, n !== -1 ? n : s.length);
    this.img = s;
    console.log(this.img, s);
    }

}
