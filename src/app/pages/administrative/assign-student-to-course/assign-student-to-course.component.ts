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
  private students;
  private courses;
  private semesters;
  private studentCourse:
  {
    courseID:number,
    studentID:number,
    courseYearOfEnrollment:Date,
    passed:number,
    semesterId:number,
 
  }
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.clearInputs();
   }

   clearInputs()
   {
    this.studentCourse=
    {
      courseID:null,
      studentID:null,
      courseYearOfEnrollment:null,
      passed:0,
      semesterId:null,
   
    }
   }

   async addMajorStudentsValues(){
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      courseID:this.studentCourse.courseID,
      studentID:this.studentCourse.studentID,
      courseYearOfEnrollment:this.studentCourse.courseYearOfEnrollment,
      passed:0,
      semesterId:this.studentCourse.semesterId,
  

    }

    if (isNullOrUndefined(ss.courseID)) { alert("Course is empty") }
    else if (isNullOrUndefined(ss.studentID)) { alert("student is empty") }
    else if (isNullOrUndefined(ss.courseYearOfEnrollment)) { alert("Course Of Year Of Enrolment is empty") }
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


  ngOnInit() {
    this.api.getStudents().then(data=>{
      this.students = JSON.parse(data.data);
    })
    this.api.getCourses().then(data=>{
      this.courses=JSON.parse(data.data);
    })

    this.api.getSemesters().then(data=>{
      this.semesters=JSON.parse(data.data);
    })
    }

}
