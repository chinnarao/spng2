import { firebaseUiAuthConfig } from './../firebase-ui.config';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseUIModule} from 'firebaseui-angular';


@NgModule( {
  imports: [
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  exports: [],
  providers: []
} )
export class FirebaseModule { }
