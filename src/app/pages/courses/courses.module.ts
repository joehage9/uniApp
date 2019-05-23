import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewCoursesPage } from './view-courses/view-courses.page';
import { AddCoursePage } from './add-course/add-course.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCoursesPage
  },
  {
    path: 'add',
    component: AddCoursePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewCoursesPage,AddCoursePage]

})
export class CoursesModule { }
