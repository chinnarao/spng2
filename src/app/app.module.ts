import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MdcButtonModule, MdcFabModule, MdcIconModule, } from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
