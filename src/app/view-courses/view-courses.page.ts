import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.page.html',
  styleUrls: ['./view-courses.page.scss'],
})
export class ViewCoursesPage implements OnInit {

  obj: any;
  constructor(private http: HTTP) {
    this.getCourses();
  }

  getCourses() {
    this.http.get('http://192.168.0.100:9100/api/CoursesValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
