import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-majors',
  templateUrl: './view-majors.page.html',
  styleUrls: ['./view-majors.page.scss'],
})
export class ViewMajorsPage implements OnInit {

  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController) {
    this.getMajors();
  }

  async getMajors() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();


    this.http.get('http://192.168.0.100:9100/api/MajorsValues', {}, {}).then(data => {
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
