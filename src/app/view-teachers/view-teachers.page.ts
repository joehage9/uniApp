import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.page.html',
  styleUrls: ['./view-teachers.page.scss'],
})
export class ViewTeachersPage implements OnInit {

  obj: any;
  constructor(private http: HTTP) {
    this.getTeachers();
  }

  getTeachers() {
    this.http.get('http://192.168.0.100:9100/api/TeachersValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
