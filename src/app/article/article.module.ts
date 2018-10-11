import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleDeleteComponent } from './article-delete/article-delete.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNotFoundComponent } from './article-not-found/article-not-found.component';

@NgModule({
  imports: [
    ArticleRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [ArticleCreateComponent, ArticleReadComponent, ArticleUpdateComponent, ArticleDeleteComponent, ArticleListComponent,
    ArticleNotFoundComponent]
})
export class ArticleModule { }
