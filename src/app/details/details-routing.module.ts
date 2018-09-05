import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TechfestDetailsComponent} from './techfest-details.component';
import {ExamexpressDetailsComponent} from './examexpress-details.component';
import {TrainingDetailsComponent} from './training-details.component';
import {ViewDetailsComponent} from './view-details.component';

const detailsRoute: Routes = [
    { path: '', component: ViewDetailsComponent , children: [
    { path: 'techfest', component: TechfestDetailsComponent },
    { path: 'exam', component: ExamexpressDetailsComponent },
    { path: 'trainings', component: TrainingDetailsComponent},
  ]
  },
  { path: '**', redirectTo: 'home' }
];
 @NgModule({
   imports: [
     RouterModule.forChild(detailsRoute)
   ],
   exports: [
     RouterModule
   ]
 })
 export class DetailsRoutingModule {}
