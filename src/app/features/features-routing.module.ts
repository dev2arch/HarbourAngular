import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view.component';
import {FaqComponent} from './faq.component';
import {WorkshopsComponent} from './workshops.component';
import {TrainingComponent} from './training.component';
import {GalleryComponent} from './gallery.component';
import {ContactComponent} from './contact.component';
import {TechradianceComponent} from '../techfest/techradiance.component';
import {CertificateVarificationComponent} from "../certificate-varification.component";


const featuresRoute: Routes = [
    { path: '', component: ViewComponent , children: [
      { path: 'faqs', component: FaqComponent },
      { path: 'workshops/:cat', component: WorkshopsComponent},
      { path: 'trainings', component: TrainingComponent},
      { path: 'gallery', component: GalleryComponent},
      { path: 'contact-us', component: ContactComponent},
      { path: 'techradiance', component: TechradianceComponent},
      { path: 'certificate-verification', component: CertificateVarificationComponent}
      ]
    },
  { path: '**', redirectTo: 'home' }
  ]

@NgModule({
  imports: [
    RouterModule.forChild(featuresRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesRoutingModule {}
