import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
// import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireDatabaseModule} from '@angular/fire/database';

// import {AuthMethods, AuthProvider, AuthProviderWithCustomConfig,
//   CredentialHelper, FirebaseUIAuthConfig, FirebaseUIModule} from 'firebaseui-angular';

// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
import { SharedModule } from './shared/shared.module';
import { MdcModule } from './shared/modules/mdc.module';  // this is not required but , app.component.html is using for some reason.

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
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
