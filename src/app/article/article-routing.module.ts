import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'article-list', pathMatch: 'full' },
  {path: 'article-list', component: ArticleListComponent},
  {path: 'article-details/:id', component: ArticleDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
