import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {

  student:
    {
      firstName: string,
      lastName: string,
      fatherName: string,
      username: string,
      password: string,
      passwordhash:string,
      address: string,
      mobileNumber: string,
      email: string,
      enrollmentDate: Date
    } = {
      firstName: null,
      lastName: null,
      fatherName: null,
      username: null,
      password: null,
      passwordhash:null,
      address: null,
      mobileNumber: null,
      email: null,
      enrollmentDate: null

    };
  constructor(private http: HTTP) {

  }

  studentAdd() 
  {
    let ss =
    {
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      fatherName: this.student.fatherName,
      username: this.student.username,
      password: this.student.password,
      passwordhash: this.student.passwordhash,
      address: this.student.address,
      mobileNumber: this.student.mobileNumber,
      email: this.student.email,
      enrollmentDate: this.student.enrollmentDate
    }    
    this.http.post('http://192.168.0.100:9100/api/values', ss, {}).then(data => {
      alert(ss);
      this.student = {
        firstName: null,
        lastName: null,
        fatherName: null,
        username: null,
        password: null,
        passwordhash:null,
        address: null,
        mobileNumber: null,
        email: null,
        enrollmentDate: null
      };
      alert("Student added successfully.");
    }).catch(error => { alert(ss);
      alert("There was an error, the student wasn't added.");
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
