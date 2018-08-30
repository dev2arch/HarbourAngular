import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechradianceComponent} from './techradiance.component';
import {SharedModule} from '../shared/shared.module';
// import {FeaturesModule} from '../features/features.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // FeaturesModule
  ],
  declarations: [
    TechradianceComponent
  ]
  ,
  exports: []
})
export class TechfestModule { }
