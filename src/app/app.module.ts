import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './common/header.component';
import { SliderComponent } from './common/slider.component';
import { FooterComponent } from './common/footer.component';
// import { FeaturesModule } from './features/features.module';

import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
