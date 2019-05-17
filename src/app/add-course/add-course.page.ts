import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';

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

  constructor(private http: HTTP, public loadingController: LoadingController) {
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

  async courseAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      name: this.course.name,
      description: this.course.description,
      numberOfCredits: this.course.numberOfCredits,
      majorID: this.course.majorID,
      teacherID: this.course.teacherID,
    }

    if (isNullOrUndefined(ss.name)) { alert("name is empty") }
    else if (isNullOrUndefined(ss.description)) { alert("description is empty") }
    else if (isNullOrUndefined(ss.numberOfCredits)) { alert("numberOfCredits is empty") }
    else if (isNullOrUndefined(ss.majorID)) { alert("majorID is empty") }
    else if (isNullOrUndefined(ss.teacherID)) { alert("teacherID is empty") }
    else {
      ss.name.toLowerCase();
      ss.description.toLowerCase();


      this.http.post('http://192.168.0.100:9100/api/CoursesValues', ss, {}).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("course added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the course wasn't added.");
        console.log(error);

      });

    }
  }

  ngOnInit() {
  }

}
