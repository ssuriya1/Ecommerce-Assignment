import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductVariantsComponent } from './components/product-variants/product-variants.component';
import { PriceComparisonComponent } from './components/price-comparison/price-comparison.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    ProductImagesComponent,
    PriceComparisonComponent,
    ProductDetailComponent,
    SellerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductVariantsComponent,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
