import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { CustomHttpClient } from './custom-http-client';
import { LoggingInterceptor } from './logging-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //         return localStorage.getItem('access_token'); },
    //     whitelistedDomains: ['localhost:3001'],
    //     blacklistedRoutes: ['localhost:3001/auth/'],
    //     skipWhenExpired: false, // default true, authScheme is bearer, headerName is Authorization by default
    //     throwNoTokenError: true, // default true
    //   }
    // })
  ],
  providers: [CustomHttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }],
  declarations: []
})
export class CoreModule { }
