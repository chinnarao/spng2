import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import { MdcButtonModule, MdcFabModule, MdcIconModule, } from '@angular-mdc/web';
import {FlexLayoutModule, BREAKPOINTS} from '@angular/flex-layout';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {AuthMethods, AuthProvider, AuthProviderWithCustomConfig,
  CredentialHelper, FirebaseUIAuthConfig, FirebaseUIModule} from 'firebaseui-angular';

import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { NavbarComponent } from './navbar/navbar.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://www.google.com',
  privacyPolicyUrl: 'https://www.google.com',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

export const appBreakPoints: any[] = [
  {
      alias: 'xs',
      suffix: 'Xs',
      overlapping: false,
      mediaQuery: 'screen and (max-width: 767px)'
  },
  {
      alias: 'gt-xs',
      suffix: 'GtXs',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 768px)'
  },
  {
      alias: 'sm',
      suffix: 'Sm',
      overlapping: false,
      mediaQuery: 'screen and (max-width: 767px)'
  },
  {
      alias: 'gt-sm',
      suffix: 'GtSm',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 768px)'
  },
  {
      alias: 'md',
      suffix: 'Md',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 768px) and (max-width: 1023px)'
  },
  {
      alias: 'gt-md',
      suffix: 'GtMd',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 1024px)'
  },
  {
      alias: 'lg',
      suffix: 'Lg',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 1024px)'
  },
  {
      alias: 'gt-lg',
      suffix: 'GtLg',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 1024px)'
  },
  {
      alias: 'xl',
      suffix: 'Xl',
      overlapping: false,
      mediaQuery: 'screen and (min-width: 1024px)'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [{ provide: BREAKPOINTS, useValue: appBreakPoints }],
  bootstrap: [AppComponent]
})
export class AppModule { }
