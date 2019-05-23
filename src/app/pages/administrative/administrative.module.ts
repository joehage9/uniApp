import { AssignStudentToMajorPage } from './assign-student-to-major/assign-student-to-major.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewAdministrativesPage } from './view-administratives/view-administratives.page';
import { AddAdministrativePage } from './add-administrative/add-administrative.page';
import { AssignStudentToCourseComponent } from './assign-student-to-course/assign-student-to-course.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAdministrativesPage
  },
  {
    path: 'add',
    component: AddAdministrativePage
  },
  {
    path: 'assign-student-to-major',
    component: AssignStudentToMajorPage
  },
  {
    path:'assign-student-to-course',
    component:AssignStudentToCourseComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAdministrativesPage,AddAdministrativePage,AssignStudentToMajorPage,AssignStudentToCourseComponent]

})
export class AdministrativeModule { }
