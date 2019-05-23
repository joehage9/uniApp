import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },

  { path:'students',loadChildren:'./pages/students/students.module#StudentsModule'},

  { path:'admins',loadChildren:'./pages/admins/admins.module#AdminsModule'},

  { path:'courses',loadChildren:'./pages/courses/courses.module#CoursesModule'},

  { path:'majors',loadChildren:'./pages/majors/majors.module#MajorsModule'},

  { path:'administratives',loadChildren:'./pages/administrative/administrative.module#AdministrativeModule'},

  { path:'teachers',loadChildren:'./pages/teachers/teachers.module#TeachersModule'},


  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
