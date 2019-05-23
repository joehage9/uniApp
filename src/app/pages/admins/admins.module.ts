import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewAdminsPage } from './view-admins/view-admins.page';
import { AddAdminPage } from './add-admin/add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAdminsPage
  },
  {
    path: 'add',
    component: AddAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAdminsPage,AddAdminPage]

})
export class AdminsModule { }
