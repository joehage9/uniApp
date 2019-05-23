import { AuthServiceService } from './services/auth-service.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Event } from '@angular/router';

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
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Students',
      children:[
        {
          title: 'Add Student',
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
      children:[
        {
          title: 'Add Teacher',
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
      children:[
        {
          title: 'Add Admin',
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
      ]
    },
    {
      title:'Courses',
      children:[
        {
          title: 'Add Course',
          url: '/courses/add',
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
      url: '/majors/add',
      icon: 'clipboard'
    },
    {
      title: 'View Majors',
      url: '/majors',
      icon: 'clipboard'
    }
      ]
    } 
   
   
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private auth:AuthServiceService
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
  }
}