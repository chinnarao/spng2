import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdRoutingModule } from './ad-routing.module';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
  imports: [
    CommonModule,
    AdRoutingModule
  ],
  declarations: [AdListComponent, AdDetailsComponent]
})
export class AdModule { }
