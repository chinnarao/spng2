import {CoreModule} from './_core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from './shared/shared.module';
import {LoggerModule, NgxLoggerLevel, NGXLogger} from 'ngx-logger';
import {AppGlobalErrorhandler} from './_error/app.global.errorhandler';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './_in-memory/in-memory-data.service';
import {MenuMdcModule} from './menu/menu.mdc.module'; // this is not required but , app.component.html is using for some reason.
import {MenuModule} from './menu/menu.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// pending 1. is browser localstorage not supported. 2. if internet offline

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    MenuMdcModule, MenuModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.OFF}),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    SharedModule, CoreModule,
  ],
  providers: [NGXLogger,
    {provide: ErrorHandler, useClass: AppGlobalErrorhandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
