import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowtocareComponent } from './howtocare/howtocare.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'howtocare', component: HowtocareComponent },
      { path: '', redirectTo: '/howtocare', pathMatch: 'full' },
      { path: 'notfound', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
    ]),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    HowtocareComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
