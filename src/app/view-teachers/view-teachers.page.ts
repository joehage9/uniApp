import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.page.html',
  styleUrls: ['./view-teachers.page.scss'],
})
export class ViewTeachersPage implements OnInit {



  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController) {
    this.getTeachers();
  }


  async getTeachers() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();


    this.http.get('http://192.168.0.100:9100/api/TeachersValues', {}, {}).then(data => {
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
