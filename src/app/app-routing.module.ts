import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' ,  canActivate:[AuthServiceService]},

  { path:'students',loadChildren:'./pages/students/students.module#StudentsModule',  canActivate:[AuthServiceService]},

  { path:'admins',loadChildren:'./pages/admins/admins.module#AdminsModule',  canActivate:[AuthServiceService]},

  { path:'courses',loadChildren:'./pages/courses/courses.module#CoursesModule',  canActivate:[AuthServiceService]},

  { path:'majors',loadChildren:'./pages/majors/majors.module#MajorsModule',  canActivate:[AuthServiceService]},

  { path:'administratives',loadChildren:'./pages/administrative/administrative.module#AdministrativeModule',  canActivate:[AuthServiceService]},

  { path:'teachers',loadChildren:'./pages/teachers/teachers.module#TeachersModule',  canActivate:[AuthServiceService]},


  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
