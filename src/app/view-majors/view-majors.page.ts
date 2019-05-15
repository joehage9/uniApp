import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-view-majors',
  templateUrl: './view-majors.page.html',
  styleUrls: ['./view-majors.page.scss'],
})
export class ViewMajorsPage implements OnInit {

  obj: any;
  constructor(private http: HTTP) {
    this.getMajors();
  }

  getMajors() {
    this.http.get('http://192.168.0.100:9100/api/MajorsValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
