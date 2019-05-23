import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  obj: any;
  user:{
    email:string,
    password:string
  }
  
  constructor(private http: HTTP, public loadingController: LoadingController, private api: ApiServiceService, private router: Router,private auth:AuthServiceService) {
    this.clearInputs();
   }

   clearInputs()
   {
     this.user={
       email:null,
       password:null,
     }
   }
  async login() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();

    this.api.getTeachers().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
      // this.router.navigate(['/home'])
      alert(this.obj);

    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

    this.api.getStudents().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
      alert(this.obj);

    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

    this.api.getAdministratives().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
      alert(this.obj);

    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

    this.api.getAdmins().then(data => {
      this.obj = JSON.parse(data.data);
      loading.dismiss();
      alert(this.obj);

    }).catch(error => {
      console.log(error);
      loading.dismiss();
      alert("Something went wrong.");
    });

    let ss={
      email:this.user.email,
      password:this.user.password
    }
    
    if (isNullOrUndefined(ss.email)) { alert("Email is empty") }
    else if (isNullOrUndefined(ss.password)) { alert("Password is empty") }
    else { ss.email.toLowerCase()}

    this.auth.login(ss).then(data=>{
        //NEED TO ADD CODE HERE.
    })
  }



  ngOnInit() {
  }

}
