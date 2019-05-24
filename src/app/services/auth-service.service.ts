import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HTTP,private storage: NativeStorage,private router:Router) { }
  private BASE_URL='http://192.168.0.100:9100/api/';

  public role: string;

  login(ss) {
    return this.http.post(this.BASE_URL + 'LoginValues', ss, {});
  }


  isLoggedIn(): boolean {
    this.storage.getItem('User').then(data=>{
      if(data == null)
      {
        return false;
      }
      else
      {
        this.storage.getItem('Role').then(data=>{
          this.role=data;
        });
        return true;
      }
    })
    return false ;
    
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
  
}
