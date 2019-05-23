import { StudentsModule } from './../../students/students.module';
import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-assign-student-to-course',
  templateUrl: './assign-student-to-course.component.html',
  styleUrls: ['./assign-student-to-course.component.scss'],
})
export class AssignStudentToCourseComponent implements OnInit {

  private studentCourse:
  {
    course:number,
    student:number,
    courseYearOfEnrolment:Date,
    semesterId:number
  }
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.clearInputs();
   }

   clearInputs()
   {
    this.studentCourse=
    {
      course:null,
      student:null,
      courseYearOfEnrolment:null,
      semesterId:null
    }
   }

   async addMajorStudentsValues(){
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      course:this.studentCourse.course,
      student:this.studentCourse.student,
      courseYearOfEnrolment:this.studentCourse.courseYearOfEnrolment,
      semesterId:this.studentCourse.semesterId

    }

    if (isNullOrUndefined(ss.course)) { alert("Course is empty") }
    else if (isNullOrUndefined(ss.student)) { alert("student is empty") }
    else if (isNullOrUndefined(ss.courseYearOfEnrolment)) { alert("Course Of Year Of Enrolment is empty") }
    else if (isNullOrUndefined(ss.semesterId)) { alert("Semester ID is empty") }

    else { 

      this.api.assignStudentToCourse(ss).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("Studient Assigned To Course successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the student wasn't assigned to the course.");        
        console.log(error);        
      });

    }

  }


  ngOnInit() {}

}
