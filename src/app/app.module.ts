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
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// {timeOut: 5000, positionClass: 'top-right', preventDuplicates: true, closeButton: true, tapToDismiss: true, progressBar: true, newestOnTop: true }
// pending 1. is browser localstorage not supported. 2. if internet offline 3. toaster 4. error interceptor

@NgModule({
  declarations: [ AppComponent, ],
  imports: [
    BrowserModule, AppRoutingModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    MenuMdcModule, MenuModule,
    LoggerModule.forRoot({serverLoggingUrl: environment.apiLogglyLogURL, level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.TRACE}),
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    LoadingBarHttpClientModule, LoadingBarRouterModule,
    ToastrModule.forRoot({timeOut: 5000, preventDuplicates: true, closeButton: true, tapToDismiss: true, progressBar: true, newestOnTop: true }),
    SharedModule, CoreModule,
  ],
  providers: [NGXLogger, ToastrService, {provide: ErrorHandler, useClass: AppGlobalErrorhandler}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
