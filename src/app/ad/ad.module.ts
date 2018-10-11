import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdCreateComponent } from './ad-create/ad-create.component';
import { AdReadComponent } from './ad-read/ad-read.component';
import { AdUpdateComponent } from './ad-update/ad-update.component';
import { AdDeleteComponent } from './ad-delete/ad-delete.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdNotFoundComponent } from './ad-not-found/ad-not-found.component';

@NgModule({
  imports: [
    AdRoutingModule
  ],
  declarations: [AdCreateComponent, AdReadComponent, AdUpdateComponent, AdDeleteComponent, AdListComponent, AdNotFoundComponent]
})
export class AdModule { }
