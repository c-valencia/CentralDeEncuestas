import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrespondenciaPage } from './correspondencia.page';

const routes: Routes = [
  {
    path: '',
    component: CorrespondenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrespondenciaPageRoutingModule {}
