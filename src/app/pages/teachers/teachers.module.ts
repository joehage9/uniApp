import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewTeachersPage } from './view-teachers/view-teachers.page';
import { AddTeacherPage } from './add-teacher/add-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTeachersPage
  },
  {
    path: 'add',
    component: AddTeacherPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewTeachersPage,AddTeacherPage]
})
export class TeachersModule { }
