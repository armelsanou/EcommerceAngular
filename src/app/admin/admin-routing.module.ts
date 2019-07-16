import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';

export const AdminRoutes: Routes = [{
  path: '',
  redirectTo: 'manage-article',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'manage-article',
    component: ManageArticlesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
