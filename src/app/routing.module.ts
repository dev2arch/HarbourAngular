import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {FaqComponent} from './features/faq.component';
import {WorkshopsComponent} from './features/workshops.component';
import {TrainingComponent} from './features/training.component';
import {GalleryComponent} from './features/gallery.component';
import {ContactComponent} from './features/contact.component';
import {TechradianceComponent} from './techfest/techradiance.component';
import {ViewComponent} from "./features/view.component";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'faqs', component: FaqComponent },
  // { path: 'workshops/:cat', component: WorkshopsComponent},
  // { path: 'trainings', component: TrainingComponent},
  // { path: 'gallery', component: GalleryComponent},
  // { path: 'contact-us', component: ContactComponent},
  // { path: 'techradiance', component: TechradianceComponent},
  // { path: '**', redirectTo: 'home' }
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
