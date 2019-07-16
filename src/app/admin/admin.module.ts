import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    ManageArticlesComponent
  ],
  exports: [
    ManageArticlesComponent
  ]
})
export class AdminModule { }
