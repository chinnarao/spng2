import {HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule } from './shared/shared.module';
import {MdcModule } from './shared/modules/mdc.module';  // this is not required but , app.component.html is using for some reason.
import {FirebaseModule } from './shared/modules/firebase.module';
import {LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';
import {AppGlobalErrorhandler } from './_error/app.global.errorhandler';
import {HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {environment } from 'src/environments/environment';
import {InMemoryDataService } from './_in-memory/in-memory-data.service';
// import { AdModule } from './ad/ad.module';
import { AdService } from './_api/ad.service';
import { ApiService } from './_api/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    SharedModule,
    FirebaseModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.OFF}),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [NGXLogger, AdService, ApiService,
    {provide: ErrorHandler, useClass: AppGlobalErrorhandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
