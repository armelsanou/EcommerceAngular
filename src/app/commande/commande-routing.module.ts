import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeListComponent } from './commande-list/commande-list.component';

export const CommandeRoutes: Routes = [{
  path: '',
  redirectTo: 'commande-list',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'commande-list',
    component: CommandeListComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(CommandeRoutes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
