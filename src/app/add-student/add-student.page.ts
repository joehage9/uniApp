import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
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
      passwordHash: string,
      address: string,
      mobileNumber: string,
      email: string,
      enrollmentDate: Date
    };

  constructor(private http: HTTP) {
    this.clearInputs();
  }

  clearInputs() {
    this.student =
      {
        firstName: null,
        lastName: null,
        fatherName: null,
        username: null,
        password: null,
        passwordHash: null,
        address: null,
        mobileNumber: null,
        email: null,
        enrollmentDate: null
      }
  }

  studentAdd() {
    let ss =
    {
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      fatherName: this.student.fatherName,
      username: this.student.username,
      password: this.student.password,
      passwordHash: this.student.passwordHash,
      address: this.student.address,
      mobileNumber: this.student.mobileNumber,
      email: this.student.email,
      enrollmentDate: this.student.enrollmentDate
    }

    if (isNullOrUndefined(ss.firstName)) { alert("firstName is empty") }
    else if (isNullOrUndefined(ss.lastName)) { alert("lastName is empty") }
    else if (isNullOrUndefined(ss.fatherName)) { alert("fatherName is empty") }   
    else if (isNullOrUndefined(ss.username)) { alert("username is empty") }
    else if (isNullOrUndefined(ss.password)) { alert("password is empty") }
    else if (isNullOrUndefined(ss.passwordHash)) { alert("passwordhash is empty") }
    else if (isNullOrUndefined(ss.address)) { alert("address is empty") }
    else if (isNullOrUndefined(ss.mobileNumber)) { alert("mobileNumber is empty") }
    else if (isNullOrUndefined(ss.email)) { alert("email is empty") }
    else if (isNullOrUndefined(ss.enrollmentDate)) { alert("enrollmentDate is empty") }
    else {
      ss.firstName.toLowerCase();
      ss.lastName.toLowerCase();
      ss.fatherName.toLowerCase();
      ss.username.toLowerCase();
      ss.address.toLowerCase();
      ss.email.toLowerCase();

     
      this.http.post('http://192.168.0.100:9100/api/StudentsValues', ss, {}).then(data => {
        alert(ss.firstName + " " + ss.lastName + " " + ss.fatherName + " " + ss.username + " " + ss.password + " " + ss.passwordHash + " " + ss.address + " " + ss.mobileNumber + " " + ss.email + " " + ss.enrollmentDate);
        this.student = {
          firstName: null,
          lastName: null,
          fatherName: null,
          username: null,
          password: null,
          passwordHash: null,
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
