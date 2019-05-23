import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewAdministrativesPage } from './view-administratives/view-administratives.page';
import { AddAdministrativePage } from './add-administrative/add-administrative.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAdministrativesPage
  },
  {
    path: 'add',
    component: AddAdministrativePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAdministrativesPage,AddAdministrativePage]

})
export class AdministrativeModule { }
