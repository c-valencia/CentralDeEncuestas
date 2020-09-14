import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrespondenciaPageRoutingModule } from './correspondencia-routing.module';

import { CorrespondenciaPage } from './correspondencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrespondenciaPageRoutingModule
  ],
  declarations: [CorrespondenciaPage]
})
export class CorrespondenciaPageModule {}
