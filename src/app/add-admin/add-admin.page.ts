import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {

  admin:
    {
      firstName: string,
      lastName: string,
      username: string,
      password: string,
      passwordHash: string,
      address: string,
      mobileNumber: string,
      email: string,
    };

  constructor(private http: HTTP, public loadingController: LoadingController) {
    this.clearInputs();
  }

  clearInputs() {
    this.admin =
      {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
        passwordHash: null,
        address: null,
        mobileNumber: null,
        email: null
      }
  }

  async adminAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      firstName: this.admin.firstName,
      lastName: this.admin.lastName,
      username: this.admin.username,
      password: this.admin.password,
      passwordHash: this.admin.passwordHash,
      address: this.admin.address,
      mobileNumber: this.admin.mobileNumber,
      email: this.admin.email
    }

    if (isNullOrUndefined(ss.firstName)) { alert("firstName is empty") }
    else if (isNullOrUndefined(ss.lastName)) { alert("lastName is empty") }
    else if (isNullOrUndefined(ss.username)) { alert("username is empty") }
    else if (isNullOrUndefined(ss.password)) { alert("password is empty") }
    else if (isNullOrUndefined(ss.passwordHash)) { alert("passwordhash is empty") }
    else if (isNullOrUndefined(ss.address)) { alert("address is empty") }
    else if (isNullOrUndefined(ss.mobileNumber)) { alert("mobileNumber is empty") }
    else if (isNullOrUndefined(ss.email)) { alert("email is empty") }
    else {
      ss.firstName.toLowerCase();
      ss.lastName.toLowerCase();
      ss.username.toLowerCase();
      ss.address.toLowerCase();
      ss.email.toLowerCase();


      this.http.post('http://192.168.0.100:9100/api/AdminsValues', ss, {}).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("admin added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the admin wasn't added.");        
        console.log(error);

      });

    }
  }

  ngOnInit() {
  }

}
