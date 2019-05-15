import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  course:
    {
      name: string,
      description: string,
      numberOfCredits: number,
      majorID: number,
      teacherID: number
    };

  constructor(private http: HTTP) {
    this.clearInputs();
  }

  clearInputs() {
    this.course =
      {
        name: null,
        description: null,
        numberOfCredits: null,
        majorID: null,
        teacherID: null
      }
  }

  courseAdd() {
    let ss =
    {
      name: this.course.name,
      description: this.course.description,
      numberOfCredits: this.course.numberOfCredits,
      majorID: this.course.majorID,
      teacherID: this.course.teacherID,
    }

    if (isNullOrUndefined(ss.name)) { alert("firstName is empty") }
    else if (isNullOrUndefined(ss.description)) { alert("lastName is empty") }
    else if (isNullOrUndefined(ss.numberOfCredits)) { alert("username is empty") }
    else if (isNullOrUndefined(ss.majorID)) { alert("password is empty") }
    else if (isNullOrUndefined(ss.teacherID)) { alert("passwordhash is empty") }
    else {
      ss.name.toLowerCase();
      ss.description.toLowerCase();


      this.http.post('http://192.168.0.100:9100/api/CoursesValues', ss, {}).then(data => {        
        this.clearInputs();
        alert("course added successfully.");

      }).catch(error => {
        alert(ss);
        alert("There was an error, the course wasn't added.");
        console.log(error);

      });

    }
  }

  ngOnInit() {
  }

}
