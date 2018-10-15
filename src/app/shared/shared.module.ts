import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdcModule } from './modules/mdc.module';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseUIModule} from 'firebaseui-angular';
// import {AuthMethods, AuthProvider, AuthProviderWithCustomConfig,
//   CredentialHelper, FirebaseUIAuthConfig, FirebaseUIModule} from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
import {environment} from '../../environments/environment';
import { firebaseUiAuthConfig } from './firebase-ui.config';

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       scopes: [
//         'public_profile',
//         'email',
//         'user_likes',
//         'user_friends'
//       ],
//       customParameters: {
//         'auth_type': 'reauthenticate'
//       },
//       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//   ],
//   tosUrl: 'https://www.google.com',
//   privacyPolicyUrl: 'https://www.google.com',
//   credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
// };

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    MdcModule,
    NgMatSearchBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
    LogInComponent,
    RegisterComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    LogInComponent,
    RegisterComponent,
  ]
})
export class SharedModule { }
