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
    {
      title: 'Add Student',
      url: '/students/add',
      icon: 'person-add'
    },
    {
      title: 'Students',
      url: '/students',
      icon: 'person'
    },
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
      title: 'Add Course',
      url: '/courses/add',
      icon: 'book'
    },
    {
      title: 'View Courses',
      url: '/courses',
      icon: 'book'
    },
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
