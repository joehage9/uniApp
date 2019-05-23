import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-majors',
  templateUrl: './view-majors.page.html',
  styleUrls: ['./view-majors.page.scss'],
})
export class ViewMajorsPage implements OnInit {

  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.getMajors();
  }

  async getMajors() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();


  this.api.getMajors().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

  }

  ngOnInit() {
  }

}
