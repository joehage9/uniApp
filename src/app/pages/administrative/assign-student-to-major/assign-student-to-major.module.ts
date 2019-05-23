import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignStudentToMajorPage } from './assign-student-to-major.page';

const routes: Routes = [
  {
    path: '',
    component: AssignStudentToMajorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignStudentToMajorPage]
})
export class AssignStudentToMajorPageModule {}
