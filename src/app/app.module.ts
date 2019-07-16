import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { AppRoutingModule } from './/app-routing.module';
import { CommandeModule } from './commande/commande.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ArticleModule,
    HttpClientModule,
    AppRoutingModule,
    CommandeModule,
    ReactiveFormsModule,
    AdminModule,
    AuthRoutingModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
