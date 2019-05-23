import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewStudentsPage } from './view-students/view-students.page';
import { AddStudentPage } from './add-student/add-student.page';


const routes: Routes = [
  {
    path: '',
    component: ViewStudentsPage
  },
  {
    path: 'add',
    component: AddStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewStudentsPage,AddStudentPage]
})
export class StudentsModule { }
