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
      address: this.student.address,
      mobileNumber: this.student.mobileNumber,
      email: this.student.email,
      enrollmentDate: this.student.enrollmentDate
    }
    this.http.post('http://localhost:13623/api/values', ss, {}).then(data => {
      this.student = {
        firstName: null,
        lastName: null,
        fatherName: null,
        username: null,
        password: null,
        address: null,
        mobileNumber: null,
        email: null,
        enrollmentDate: null
      };
    }).catch(error => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}
