import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { MdcModule } from './shared/modules/mdc.module';  // this is not required but , app.component.html is using for some reason.
import { FirebaseModule } from './shared/modules/firebase.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
