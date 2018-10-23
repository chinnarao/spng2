import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
  ],
  providers: [],
})
export class SharedModule { }
