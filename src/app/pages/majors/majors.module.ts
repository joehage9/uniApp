import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewMajorsPage } from './view-majors/view-majors.page';
import { AddMajorPage } from './add-major/add-major.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMajorsPage
  },
  {
    path: 'add',
    component: AddMajorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewMajorsPage,AddMajorPage]

})
export class MajorsModule { }
