import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {

  teacher:
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

  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.clearInputs();
  }

  clearInputs() {
    this.teacher =
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

  async teacherAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      firstName: this.teacher.firstName,
      lastName: this.teacher.lastName,
      username: this.teacher.username,
      password: this.teacher.password,
      passwordHash: this.teacher.passwordHash,
      address: this.teacher.address,
      mobileNumber: this.teacher.mobileNumber,
      email: this.teacher.email
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


    this.api.addTeacher(ss).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("teacher added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the teacher wasn't added.");
        console.log(error);

      });

    }
  }
  ngOnInit() {
  }

}
