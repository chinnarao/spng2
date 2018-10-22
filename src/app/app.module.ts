import {HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule } from './shared/shared.module';
import {MdcModule } from './shared/modules/mdc.module';  // this is not required but , app.component.html is using for some reason.
import {FirebaseModule } from './menu/firebase.module';
import {LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';
import {AppGlobalErrorhandler } from './_error/app.global.errorhandler';
import {HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService } from './_in-memory/in-memory-data.service';
import { ApiService } from './_api/api.service';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule,
    MdcModule, MenuModule, FirebaseModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.OFF}),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    SharedModule,
  ],
  providers: [NGXLogger, ApiService,
    {provide: ErrorHandler, useClass: AppGlobalErrorhandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
