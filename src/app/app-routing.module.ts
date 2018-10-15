import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log-in', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'ad-list', loadChildren: './ad/ad.module#AdModule'},
  { path: 'article-list', loadChildren: './article/article.module#ArticleModule'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
