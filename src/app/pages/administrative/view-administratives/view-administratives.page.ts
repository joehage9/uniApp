import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-view-administratives',
  templateUrl: './view-administratives.page.html',
  styleUrls: ['./view-administratives.page.scss'],
})
export class ViewAdministrativesPage implements OnInit {

  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.getAdmins();
  }

  async getAdmins() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();

    this.api.getAdministratives().then(data => {
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
