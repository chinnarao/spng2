import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { MenuMdcModule } from './menu.mdc.module';
import { FirebaseModule } from './firebase.module';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    CommonModule, RouterModule, FlexLayoutModule, ReactiveFormsModule,
    MenuMdcModule, WebStorageModule, FirebaseModule,
  ],
  declarations: [],
  exports: [],
  providers: [MenuService],
})
export class MenuModule { }
