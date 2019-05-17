import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Add Student',
      url: '/add-student',
      icon: 'person-add'
    },
    {
      title: 'View Students',
      url: '/view-students',
      icon: 'person'
    },
    {
      title: 'Add Teacher',
      url: '/add-teacher',
      icon: 'person-add'
    },
    {
      title: 'View Teachers',
      url: '/view-teachers',
      icon: 'person'
    },
    {
      title: 'Add Admin',
      url: '/add-admin',
      icon: 'person-add'
    },
    {
      title: 'View Admins',
      url: '/view-admins',
      icon: 'person'
    },
    {
      title: 'Add Administrative',
      url: '/add-administrative',
      icon: 'person-add'
    },
    {
      title: 'View Administrative',
      url: '/view-administratives',
      icon: 'person'
    },
    {
      title: 'Add Course',
      url: '/add-course',
      icon: 'book'
    },
    {
      title: 'View Courses',
      url: '/view-courses',
      icon: 'book'
    },
    {
      title: 'Add Major',
      url: '/add-major',
      icon: 'clipboard'
    },
    {
      title: 'View Majors',
      url: '/view-majors',
      icon: 'clipboard'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
