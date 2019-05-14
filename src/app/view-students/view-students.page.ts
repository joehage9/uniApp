import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.page.html',
  styleUrls: ['./view-students.page.scss'],
})
export class ViewStudentsPage implements OnInit {
  obj: any;
  constructor(private http: HTTP) {
    this.getStudents();
  }

  getStudents() {
    this.http.get('http://192.168.0.100:9100/api/StudentsValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
    }).catch(error => {
      console.log(error);
    });

  }
  ngOnInit() {
  }

}
