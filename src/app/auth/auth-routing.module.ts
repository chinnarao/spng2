import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'log-in', redirectTo: '', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
