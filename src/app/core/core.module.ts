import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './layout/app.component'
import { TranslateModule } from '@ngx-translate/core';
import { GenericsModule } from '@projects/shared/generics/generics.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    GenericsModule
  ],
  declarations: [AppComponent],
})
export class CoreModule { }
