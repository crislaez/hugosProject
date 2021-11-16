import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowUsPageComponent } from './containers/know-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: KnowUsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowUsRoutingModule { }
