import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechfestDetailsComponent } from './techfest-details.component';
import { ExamexpressDetailsComponent } from './examexpress-details.component';
import { TrainingDetailsComponent } from './training-details.component';
import { ViewDetailsComponent } from './view-details.component';
import {DetailsRoutingModule} from './details-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  declarations: [ TechfestDetailsComponent,
                  ExamexpressDetailsComponent,
                  TrainingDetailsComponent,
                  ViewDetailsComponent
  ]
})
export class DetailsModule { }
