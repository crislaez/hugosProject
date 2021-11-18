import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GenericsModule } from '@projects/shared-ui/generics/generics.module';
import { AppComponent } from './layout/app.component';

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
