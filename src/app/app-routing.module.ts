import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'add-student', loadChildren: './pages/add-student/add-student.module#AddStudentPageModule' },  
  { path: 'add-teacher', loadChildren: './pages/add-teacher/add-teacher.module#AddTeacherPageModule' },
  { path: 'add-admin', loadChildren: './pages/add-admin/add-admin.module#AddAdminPageModule' },
  { path: 'add-course', loadChildren: './pages/add-course/add-course.module#AddCoursePageModule' },
  { path: 'add-major', loadChildren: './pages/add-major/add-major.module#AddMajorPageModule' },

  { path: 'view-students', loadChildren: './pages/view-students/view-students.module#ViewStudentsPageModule' },
  { path: 'view-teachers', loadChildren: './pages/view-teachers/view-teachers.module#ViewTeachersPageModule' },
  { path: 'view-admins', loadChildren: './pages/view-admins/view-admins.module#ViewAdminsPageModule' },
  { path: 'view-courses', loadChildren: './pages/view-courses/view-courses.module#ViewCoursesPageModule' },
  { path: 'view-majors', loadChildren: './pages/view-majors/view-majors.module#ViewMajorsPageModule' },
  { path: 'add-administrative', loadChildren: './pages/add-administrative/add-administrative.module#AddAdministrativePageModule' },
  { path: 'view-administratives', loadChildren: './pages/view-administratives/view-administratives.module#ViewAdministrativesPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
