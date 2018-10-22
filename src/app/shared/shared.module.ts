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
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
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
  ],
  declarations: [
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
  ],
  exports: [
    CommonModule,
    FooterComponent,
    SpinnerComponent,
  ],
  providers: [RoutingService],
})
export class SharedModule { }
