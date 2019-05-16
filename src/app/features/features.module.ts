import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FaqComponent } from './faq.component';
import { ContactComponent } from './contact.component';
import { WorkshopsComponent } from './workshops.component';
import { TrainingComponent } from './training.component';
import { GalleryComponent } from './gallery.component';
import { ViewComponent } from './view.component';
import {FeaturesRoutingModule} from './features-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TechfestModule} from '../techfest/techfest.module';
import {CertificateVarificationComponent} from "../certificate-varification.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FinaleComponent } from './finale.component';
import { PaymentComponent } from './payment.component';
import { PayResComponent } from './pay-res.component';
import { StudentListComponent } from './student-list.component';
import { RulesComponent } from './rules.component';


@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule,
    TechfestModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewComponent,
    FaqComponent,
    ContactComponent,
    WorkshopsComponent,
    TrainingComponent,
    GalleryComponent,
    CertificateVarificationComponent,
    FinaleComponent,
    PaymentComponent,
    PayResComponent,
    StudentListComponent,
    RulesComponent
   ],
  exports: []
})
export class FeaturesModule { }
