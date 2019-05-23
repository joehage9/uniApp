import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewSemestersComponent } from './view-semesters/view-semesters.component';
import { AddSemesterComponent } from './add-semester/add-semester.component';


const routes: Routes = [
  {
    path: '',
    component: ViewSemestersComponent
  },
  {
    path: 'add',
    component: AddSemesterComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewSemestersComponent,AddSemesterComponent]
})
export class SemesterModule { }
