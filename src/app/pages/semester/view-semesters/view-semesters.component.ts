import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-semesters',
  templateUrl: './view-semesters.component.html',
  styleUrls: ['./view-semesters.component.scss'],
})
export class ViewSemestersComponent implements OnInit {

  obj: any;
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) { 
    this.getSemesters();
  }
  async getSemesters() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();


   this.api.getSemesters().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

  }

  ngOnInit() {}

}
