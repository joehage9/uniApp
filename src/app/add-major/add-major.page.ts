import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.page.html',
  styleUrls: ['./add-major.page.scss'],
})
export class AddMajorPage implements OnInit {

  major:
    {
      name: string,
      numberOfCredits: number
    };

  constructor(private http: HTTP, public loadingController: LoadingController) {
    this.clearInputs();
  }

  clearInputs() {
    this.major =
      {
        name: null,
        numberOfCredits: null
      }
  }

  async majorAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      name: this.major.name,
      numberOfCredits: this.major.numberOfCredits
    }

    if (isNullOrUndefined(ss.name)) { alert("name is empty") }
    else if (isNullOrUndefined(ss.numberOfCredits)) { alert("numberOfCredits is empty") }
    else {
      ss.name.toLowerCase();


      this.http.post('http://192.168.0.100:9100/api/MajorValues', ss, {}).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("major added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the major wasn't added.");
        console.log(error);

      });

    }
  }


  ngOnInit() {
  }

}
