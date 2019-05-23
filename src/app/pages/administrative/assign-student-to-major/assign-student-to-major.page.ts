import { StudentsModule } from './../../students/students.module';
import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-assign-student-to-major',
  templateUrl: './assign-student-to-major.page.html',
  styleUrls: ['./assign-student-to-major.page.scss'],
})
export class AssignStudentToMajorPage implements OnInit {

  majorStudent:
    {
      major:number,
      student:number,
      graduated:boolean,
      enrollmentDate:Date
    }

  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) { 
    this.clearInputs();
  }

    clearInputs(){
      this.majorStudent=
      {
        major:null,
        student:null,
        graduated:null,
        enrollmentDate:null
      }
    }

    async addMajorStudentsValues(){
      const loading = await this.loadingController.create({
        spinner: 'crescent'
      });
  
      loading.present();
      let ss =
      {
        major:this.majorStudent.major,
        student:this.majorStudent.student,
        graduated:this.majorStudent.graduated,
        enrollmentDate:new Date().toISOString().slice(0,10)
  
      }
  
      if (isNullOrUndefined(ss.major)) { alert("major is empty") }
      else if (isNullOrUndefined(ss.student)) { alert("student is empty") }
      else if (isNullOrUndefined(ss.graduated)) { alert("graduated is empty") }
  
      else { 
  
        this.api.assignStudentToMajor(ss).then(data => {
          this.clearInputs();
          loading.dismiss();
          alert("Student assigned to major successfully.");
  
        }).catch(error => {
          loading.dismiss();
          alert("There was an error, the student wasn't assigned to the major.");        
          console.log(error);        
        });
  
      }

    }
  ngOnInit() {
  }

}
