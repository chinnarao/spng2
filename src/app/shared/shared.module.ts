import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { MdcModule } from './modules/mdc.module';
import { FirebaseModule } from './modules/firebase.module';
import { WebStorageModule } from 'ngx-store';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

// import { LogInComponent } from './components/log-in/log-in.component';
// import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireDatabaseModule} from '@angular/fire/database';
// import {FirebaseUIModule} from 'firebaseui-angular';
// import {environment} from '../../environments/environment';
// import { firebaseUiAuthConfig } from './modules/firebase-ui.config';
import { RoutingService } from './services/routing.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    MdcModule,
    WebStorageModule,
    NgMatSearchBarModule,
    FirebaseModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  declarations: [
    //HeaderComponent,
    FooterComponent,
    //LogInComponent,
    //RegisterComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
    //SearchBarComponent,
  ],
  exports: [
    CommonModule,
    //HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    //LogInComponent,
    //RegisterComponent,
  ],
  providers: [RoutingService],
})
export class SharedModule { }
