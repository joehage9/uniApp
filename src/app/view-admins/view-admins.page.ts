import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.page.html',
  styleUrls: ['./view-admins.page.scss'],
})
export class ViewAdminsPage implements OnInit {

  obj: any;
  constructor(private http: HTTP) {
    this.getAdmins();
  }

  getAdmins() {
    this.http.get('http://192.168.0.100:9100/api/AdminsValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
