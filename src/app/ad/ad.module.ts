import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdComponent } from './ad/ad.component';

@NgModule({
  imports: [
    CommonModule,
    AdRoutingModule
  ],
  declarations: [AdComponent]
})
export class AdModule { }
