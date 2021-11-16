import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import * as appConfig from './app-config';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { AppComponent } from './core';
import { extModules } from './core/build-specifics';
import { CoreModule } from './core/core.module';
import { ENVIRONMENT } from './core/externals';
import { appInitTranslations, createTranslateLoader } from './core/i18n/utils/custom-18n-functions';
import { DynamicLocaleId } from './core/i18n/utils/dynamic-locale-id.class';
import { CoreConfigService } from './core/services/core-config.service';
import { HttpErrorInterceptor } from './core/services/http-error.interceptor';
import { HomeModule } from './home/home.module';
import { ServiceModule } from './service/service.module';

export function appInitializerFactory(translate: TranslateService, coreConfig: CoreConfigService): Function {
  coreConfig.importConfig(appConfig);
  return () => appInitTranslations(translate, appConfig.Languages, appConfig.DefaultLang);
};

export function localeIdFactory(translate: TranslateService): DynamicLocaleId {
  return new DynamicLocaleId(translate);
};

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient, ENVIRONMENT]
        }
    }),
    StoreModule.forRoot({},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    extModules,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ServiceModule,
    ContactModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: IonicRouteStrategy
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, CoreConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      deps: [Store],
      multi: true
    },
    {
      provide: ENVIRONMENT,
      useValue: environment
    },
    {
      provide: LOCALE_ID,
      useClass: DynamicLocaleId,
      deps: [TranslateService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
