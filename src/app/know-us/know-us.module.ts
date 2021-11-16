import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowUsPageComponent } from './containers/know-us-page.component';
import { KnowUsRoutingModule } from './know-us-routing.module';


@NgModule({
  declarations: [
    KnowUsPageComponent
  ],
  imports: [
    CommonModule,
    KnowUsRoutingModule
  ]
})
export class KnowUsModule { }
