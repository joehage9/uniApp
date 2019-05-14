import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'add-student',
    loadChildren: './add-student/add-student.module#AddStudentPageModule'
  },
  {
    path: 'view-students',
    loadChildren: './view-students/view-students.module#ViewStudentsPageModule'
  },
  {
    path: 'add-teacher',
    loadChildren: './add-teacher/add-teacher.module#AddTeacherPageModule'
  },
  {
    path: 'view-teachers',
    loadChildren: './view-teachers/view-teachers.module#ViewTeachersPageModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
