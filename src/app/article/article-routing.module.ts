import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

export const ArticleRoutes: Routes = [{
  path: '',
  redirectTo: 'article-list',
  pathMatch: 'full',
}, {
    path: '',
    children: [{
      path: 'article-list',
      component: ArticleListComponent
    }, {
      path: 'article-detail',
        component: ArticleDetailsComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(ArticleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
