import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CarrelloPage } from './pages/carrello';
import { CarrelloDetailsPage } from './pages/products-details';

const routes : Route = [
  {
    path : '',
    component : ProductsComponent
  },
  {
    path: 'carrello',
    component : CarrelloPage
  },
  {
    path: 'details/:id',
    component : CarrelloDetailsPage
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CarrelloDetailsPage,
    CarrelloPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
