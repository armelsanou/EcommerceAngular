import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { CommandeListComponent } from './commande/commande-list/commande-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManageArticlesComponent } from './admin/manage-articles/manage-articles.component';
import { LoginComponent } from './auth/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full',
  },
  {
    path: 'authetification',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'article',
    component: ArticleListComponent,
    children: [{
      path: '',
      loadChildren: './article/article.module#ArticleModule'
    }],
  },
  {
    path: 'admin',
    component: ManageArticlesComponent,
    children: [{
      path: '',
      loadChildren: './admin/admin.module#AdminModule'
    }],
  },
  {
    path: 'commande',
    component: CommandeListComponent,
    children: [{
      path: '',
      loadChildren: './commande/commande.module#CommandeModule'
    }],
  },
  {
    path: 'authentification',
    component: LoginComponent,
    children: [{
      path: '',
      loadChildren: './auth/auth.module#AuthModule'
    }],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(AppRoutes)]
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
