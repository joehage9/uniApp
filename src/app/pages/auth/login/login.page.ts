import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, NavController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  response: any;
  user:
    {
      username: string,
      password: string
    }

  constructor(private http: HTTP, public loadingController: LoadingController, private router: Router, private auth: AuthServiceService,private storage: Storage) {
    this.clearInputs();
  }

  clearInputs() {
    this.user =
      {
        username: null,
        password: null,
      }
  }

  async login() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();

    let ss =
    {
      username: this.user.username,
      password: this.user.password
    }

    if (isNullOrUndefined(ss.username)) { alert("Username is empty") }
    else if (isNullOrUndefined(ss.password)) { alert("Password is empty") }
    else {
      ss.username.toLowerCase()

      this.auth.login(ss).then(data => {
        this.response = JSON.parse(data.data);
        this.clearInputs();
        loading.dismiss();

        if(this.response.Success==true)
        {
          console.log(this.response.Message);
       
            this.storage.set('User',this.response.Message);

          
          this.storage.set('Role',this.response.Role);
          this.goToNextPage();  
        }
        else
        {
          alert(this.response.Error);
        }
      }).catch(error => {
        loading.dismiss();
        alert("Something went wrong");
        console.log(error);
      });
    }
  }

  goToNextPage() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
