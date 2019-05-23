import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HTTP) { }
  private BASE_URL='http://192.168.0.100:9100/api/';

  public role: string;

  login(ss) {
    return this.http.post(this.BASE_URL + 'LoginValues', ss, {});
  }


  isLoggedIn(): boolean {
    // if (this.localStorage.getItem('user') != null) 
    //   return true;
    // else
    //   return false;

    //NEED TO ADD LOGIN ALGORITHM
    return true;
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      // this.router.navigateByUrl('/');
      return false;
    }
  }
  
}
