import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductVariantsComponent } from '../product-variants/product-variants.component';
import { PriceComparisonComponent } from '../price-comparison/price-comparison.component';

interface ProductDetails {
  id: string;
  name: string;
  rating: number;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  variants: {
    storage: string[];
    colors: string[];
  };
}

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  selectedTab = 0;
  
  tabs = [
    { label: 'Prices' },
    { label: 'Reviews' },
    { label: 'Price development' },
    { label: 'About the product' },
    { label: 'Specifications' }
  ];

  product: ProductDetails = {
    id: 'iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max, 256GB',
    rating: 4.1,
    price: {
      min: 17190,
      max: 22038,
      currency: 'SEK'
    },
    description: 'Experience the next generation of mobile technology with the iPhone 16 Pro Max 256GB, equipped with the Apple A18 Pro chip and fast 5G connection.',
    variants: {
      storage: ['1TB', '256GB', '512GB'],
      colors: ['Black', 'White']
    }
  };

  constructor() { }

  ngOnInit(): void { }

  selectTab(index: number): void {
    this.selectedTab = index;
  }

  onMonitorPrice(): void {
    console.log('Monitoring price for:', this.product.id);
  }

  onCompare(): void {
    console.log('Adding to compare:', this.product.id);
  }
}