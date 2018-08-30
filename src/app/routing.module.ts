import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view', loadChildren:'./features/features.module#FeaturesModule'},
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
