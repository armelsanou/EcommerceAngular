import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeListComponent } from './commande-list/commande-list.component';

@NgModule({
  imports: [
    CommonModule,
    CommandeRoutingModule
  ],
  declarations: [CommandeListComponent]
})
export class CommandeModule { }
