import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FaqComponent } from './faq.component';
import { ContactComponent } from './contact.component';
import { WorkshopsComponent } from './workshops.component';
import { TrainingComponent } from './training.component';
import { GalleryComponent } from './gallery.component';
import { PageBannerComponent } from './page-banner.component';
import { ViewComponent } from './view.component';
import {FeaturesRoutingModule} from './features-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  declarations: [
    ViewComponent,
    FaqComponent,
    ContactComponent,
    WorkshopsComponent,
    TrainingComponent,
    GalleryComponent,
    PageBannerComponent,
   ],
  exports: [PageBannerComponent]
})
export class FeaturesModule { }
