import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {

  private StudentID:number;
  courses:any;
  constructor(private storage:Storage,private api:ApiServiceService) { }

  ngOnInit() {
    this.storage.get('User').then(data=>{
          this.StudentID=data.ID
          this.storage.get('Role').then(data=>{
            if(data == 'Student')
            {
              this.getStudentData()
            }
          })
    }
    )
  }


  getStudentData()
  {
    let ss={
      studentID:this.StudentID
    }
    console.log(ss);
    this.api.getStudentData(ss).then(data=>
      {
        this.courses=JSON.parse(data.data);
        console.log(this.courses);
      })
  }
}
