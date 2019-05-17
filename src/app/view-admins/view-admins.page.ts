import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.page.html',
  styleUrls: ['./view-admins.page.scss'],
})
export class ViewAdminsPage implements OnInit {

  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController) {
    this.getAdmins();
  }

  async getAdmins() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();

    this.http.get('http://192.168.0.100:9100/api/AdminsValues', {}, {}).then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
    });

  }

  ngOnInit() {
  }

}
