import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAdministrativePage } from './add-administrative.page';

const routes: Routes = [
  {
    path: '',
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
  declarations: [AddAdministrativePage]
})
export class AddAdministrativePageModule {}
