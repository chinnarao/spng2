import {NgModule} from '@angular/core';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiAuthConfig } from './firebase-ui.config';
import { LogInComponent } from '../components/log-in/log-in.component';
import { HeaderComponent } from '../components/header/header.component';
import { RegisterComponent } from '../components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MdcModule } from './mdc.module';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FlexLayoutModule,
    RouterModule,
    MdcModule,
    NgMatSearchBarModule,
    CommonModule,
  ],
  declarations: [LogInComponent, HeaderComponent, RegisterComponent, SearchBarComponent],
  exports: [LogInComponent, HeaderComponent, RegisterComponent, SearchBarComponent],
  providers: []
})
export class FirebaseModule { }
