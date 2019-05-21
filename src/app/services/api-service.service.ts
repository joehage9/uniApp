import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL='http://192.168.0.100:9100/api/';

  constructor(private http:HTTP) { }


  addAdminValues(ss)
  {
    return  this.http.post(this.BASE_URL+'/AdminsValues', ss, {});      
  }
}
