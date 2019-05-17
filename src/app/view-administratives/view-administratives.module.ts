import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewAdministrativesPage } from './view-administratives.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAdministrativesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAdministrativesPage]
})
export class ViewAdministrativesPageModule {}
