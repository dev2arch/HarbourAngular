import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechradianceComponent} from './techradiance.component';
import {FeaturesModule} from '../features/features.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule
  ],
  declarations: [TechradianceComponent]
})
export class TechfestModule { }
