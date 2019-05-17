import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'add-student', loadChildren: './add-student/add-student.module#AddStudentPageModule' },  
  { path: 'add-teacher', loadChildren: './add-teacher/add-teacher.module#AddTeacherPageModule' },
  { path: 'add-admin', loadChildren: './add-admin/add-admin.module#AddAdminPageModule' },
  { path: 'add-course', loadChildren: './add-course/add-course.module#AddCoursePageModule' },
  { path: 'add-major', loadChildren: './add-major/add-major.module#AddMajorPageModule' },

  { path: 'view-students', loadChildren: './view-students/view-students.module#ViewStudentsPageModule' },
  { path: 'view-teachers', loadChildren: './view-teachers/view-teachers.module#ViewTeachersPageModule' },
  { path: 'view-admins', loadChildren: './view-admins/view-admins.module#ViewAdminsPageModule' },
  { path: 'view-courses', loadChildren: './view-courses/view-courses.module#ViewCoursesPageModule' },
  { path: 'view-majors', loadChildren: './view-majors/view-majors.module#ViewMajorsPageModule' },
  { path: 'add-administrative', loadChildren: './add-administrative/add-administrative.module#AddAdministrativePageModule' },
  { path: 'view-administratives', loadChildren: './view-administratives/view-administratives.module#ViewAdministrativesPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
