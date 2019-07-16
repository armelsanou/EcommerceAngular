import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AdminModule } from '../admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewArticleComponent } from './add-new-article/add-new-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    AddNewArticleComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    DeleteArticleComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleDetailsComponent,
    AddNewArticleComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    DeleteArticleComponent
  ]
})
export class ArticleModule { }
