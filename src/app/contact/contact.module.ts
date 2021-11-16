import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@projects/shared/shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './containers/contact-page.component';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild(),
    ContactRoutingModule
  ]
})
export class ContactModule { }
