import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';

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
      passwordhash: string,
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
      passwordhash: null,
      address: null,
      mobileNumber: null,
      email: null,
      enrollmentDate: null

    };
  constructor(private http: HTTP) {

  }
  clearInputs() 
  {  
    this.student =
    {
      firstName: null,
      lastName: null,
      fatherName: null,
      username: null,
      password: null,
      passwordhash: null,
      address: null,
      mobileNumber: null,
      email: null,
      enrollmentDate: null
    }
  }

  studentAdd() {
    if (isNullOrUndefined(this.student.firstName) || isNullOrUndefined(this.student.lastName) || isNullOrUndefined(this.student.fatherName) || isNullOrUndefined(this.student.username) ||
      isNullOrUndefined(this.student.password) || isNullOrUndefined(this.student.passwordhash) || isNullOrUndefined(this.student.address) || isNullOrUndefined(this.student.mobileNumber) ||
      isNullOrUndefined(this.student.email) || isNullOrUndefined(this.student.enrollmentDate)) {
      alert("Please fill all of the inputs.")
    }
    else {
      let ss =
      {
        firstName: this.student.firstName.toLocaleLowerCase,
        lastName: this.student.lastName.toLocaleLowerCase,
        fatherName: this.student.fatherName.toLocaleLowerCase,
        username: this.student.username.toLocaleLowerCase,
        password: this.student.password,
        passwordhash: this.student.passwordhash,
        address: this.student.address.toLocaleLowerCase,
        mobileNumber: this.student.mobileNumber,
        email: this.student.email.toLocaleLowerCase,
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
          passwordhash: null,
          address: null,
          mobileNumber: null,
          email: null,
          enrollmentDate: null
        };
        alert("Student added successfully.");
      }).catch(error => {
        alert(ss);
        alert("There was an error, the student wasn't added.");
        console.log(error);
      });

    }
  }


  ngOnInit() {
  }

}
