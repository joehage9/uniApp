import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { isNullOrUndefined } from 'util';
import { LoadingController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.scss'],
})
export class AddSemesterComponent implements OnInit {
  Semester:
  {
    name: string,
  };
  constructor(private http: HTTP, public loadingController: LoadingController,private api:ApiServiceService) {
    this.clearInputs();
   }

   clearInputs()
   {
     this.Semester={name:null};
   }


   async semesterAdd() {
    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    loading.present();
    let ss =
    {
      name: this.Semester.name,
    }

    if (isNullOrUndefined(ss.name)) { alert("name is empty") }
    else{
     this.api.addSemester(ss).then(data => {
        this.clearInputs();
        loading.dismiss();
        alert("Semester added successfully.");

      }).catch(error => {
        loading.dismiss();
        alert("There was an error, the Semester wasn't added.");
        console.log(error);

      });

    }
  }

  ngOnInit() {}

}
