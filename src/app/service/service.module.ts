import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesPageComponent } from './containers/services-page.component';
import { ServiceRoutingModule } from './service-routing.module';


@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
