import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';

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

  constructor(private http: HTTP) {
    this.clearInputs();
  }

  clearInputs() {
    this.major =
      {
        name: null,
        numberOfCredits: null
      }
  }

  majorAdd() {
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
        alert("major added successfully.");

      }).catch(error => {
        alert(ss);
        alert("There was an error, the major wasn't added.");
        console.log(error);

      });

    }
  }


  ngOnInit() {
  }

}
