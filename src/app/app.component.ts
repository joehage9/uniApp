import { AuthServiceService } from './services/auth-service.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Storage } from '@ionic/storage';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit{
  private currentUrl='';
  private role;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Students',
      role:['Students'],
      children:[
        {
          title: 'Add Student',
          role:'Administratives',
          url: '/students/add',
          icon: 'person-add'
        },
        {
          title: 'View Students',
          url: '/students',
          icon: 'person'
        },
      ]
    },
    {
      title:'Teachers',
      role:['Teachers','Admin','Administratives'],
      children:[
        {
          title: 'Add Teacher',
          role:'Administratives',
          url: '/teachers/add',
          icon: 'person-add'
        },
        {
          title: 'View Teachers',
          url: '/teachers',
          icon: 'person'
        },
      ]
    },
    {
      title:'Admins',
      role:['Admin','Administratives'],
      children:[
        {
          title: 'Add Admin',
          role:'Administratives',
          url: '/admins/add',
          icon: 'person-add'
        },
        {
          title: 'View Admins',
          url: '/admins',
          icon: 'person'
        },
      ]
    },
    {
      title:'Administratives',
      role:['Administratives'],
      children:[
        {
          title: 'Add Administrative',
          url: '/administratives/add',
          icon: 'person-add'
        },
        {
          title: 'View Administrative',
          url: '/administratives',
          icon: 'person'
        },
        {
          title: 'Assign student to major',
          url: '/administratives/assign-student-to-major',
          icon: 'person'
        },
        {
          title: 'Assign student to course',
          url: '/administratives/assign-student-to-course',
          icon: 'person'         
        }
      ]
    },
    {
      title:'Courses',
      children:[
        {
          title: 'Add Course',
          url: '/courses/add',
          role:'Administratives',
          icon: 'book'
        },
        {
          title: 'View Courses',
          url: '/courses',
          icon: 'book'
        },
      ]
    },
    {
      title:'Majors',
      children:[
{
      title: 'Add Major',
      role:'Administratives',
      url: '/majors/add',
      icon: 'clipboard'
    },
    {
      title: 'View Majors',
      url: '/majors',
      icon: 'clipboard'
    }
      ]
    },
    {
      title:'Semester',
      children:[
{
      title: 'Add Semester',
      role:'Administratives',
      url: '/semester/add',
      icon: 'clipboard'
    },
    {
      title: 'View Semester',
      url: '/semester',
      icon: 'clipboard'
    }
      ]
    },
    {
      title:'Grades',
      role:'Student',
      url:'/students/grades',
      icon:'clipboard'
    }  
   
   
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private auth:AuthServiceService,
    private storage:Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.hide();
    });
  }

  logout()
  {
    this.auth.role=null;
    this.router.navigateByUrl('/login');

  }

  ngOnInit()
  {
    this.router.events.subscribe((res) => { 
      this.currentUrl=this.router.url;
  });
    this.storage.get("Role").then(data=>
      {
        this.role=data;
        console.log(this.role);
      })
  }
}