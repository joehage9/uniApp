import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-administrative',
  templateUrl: './add-administrative.page.html',
  styleUrls: ['./add-administrative.page.scss'],
})
export class AddAdministrativePage implements OnInit {


  administrative:
    {
      firstName: string,
      lastName: string,
      username: string,
      password: string,
      passwordHash: string,
      address: string,
      mobileNumber: string,
      email: string,
      privilegeLevel:string
    };

  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.clearInputs();
  }

  clearInputs() {
    this.administrative =
      {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
        passwordHash: null,
        address: null,
        mobileNumber: null,
        email: null,
        privilegeLevel:null
      }
  }

  async administrativeAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      firstName: this.administrative.firstName,
      lastName: this.administrative.lastName,
      username: this.administrative.username,
      password: this.administrative.password,
      passwordHash: this.administrative.passwordHash,
      address: this.administrative.address,
      mobileNumber: this.administrative.mobileNumber,
      email: this.administrative.email,
      privilegeLevel:this.administrative.privilegeLevel

    }

    if (isNullOrUndefined(ss.firstName)) { alert("firstName is empty") }
    else if (isNullOrUndefined(ss.lastName)) { alert("lastName is empty") }
    else if (isNullOrUndefined(ss.username)) { alert("username is empty") }
    else if (isNullOrUndefined(ss.password)) { alert("password is empty") }
    else if (isNullOrUndefined(ss.passwordHash)) { alert("passwordhash is empty") }
    else if (isNullOrUndefined(ss.address)) { alert("address is empty") }
    else if (isNullOrUndefined(ss.mobileNumber)) { alert("mobileNumber is empty") }
    else if (isNullOrUndefined(ss.email)) { alert("email is empty") }
    else if (isNullOrUndefined(ss.privilegeLevel)) { alert("privilege Level is empty") }

    else {
      ss.firstName.toLowerCase();
      ss.lastName.toLowerCase();
      ss.username.toLowerCase();
      ss.address.toLowerCase();
      ss.email.toLowerCase();


      this.api.addAdministrative(ss).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("administrative added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the administrative wasn't added.");        
        console.log(error);        
      });

    }
  }

  ngOnInit() {
  }

}
