import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageBannerComponent} from '../features/page-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageBannerComponent
  ],
  exports: [
    PageBannerComponent
  ]
})
export class SharedModule { }
