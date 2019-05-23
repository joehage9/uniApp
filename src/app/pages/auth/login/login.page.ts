import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, NavController } from '@ionic/angular';
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

  response: any;
  user:
    {
      username: string,
      password: string
    }

  constructor(private http: HTTP, public loadingController: LoadingController, private api: ApiServiceService, private router: Router, private auth: AuthServiceService) {
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

      this.api.login(ss).then(data => {
        this.response = JSON.parse(data.data);

        this.clearInputs();
        loading.dismiss();
      
        if (this.response == '"administrative authentication authorized"') {
          this.api.role = "administrative";
          this.goToNextPage();
        }
        else if (this.response == '"admin authentication authorized"') {
          this.api.role = "admin";
          this.goToNextPage();
        }
        else if (this.response == '"student authentication authorized"') {
          this.api.role = "student";
          this.goToNextPage();
        }
        else if (this.response == '"teacher authentication authorized"') {
          this.api.role = "teacher";
          this.goToNextPage();
        }
        else if (this.response == '"authentication failed"') {
          this.api.role = null;
          alert("Incorrect username or password");
        }
        console.log(this.api.role);
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
