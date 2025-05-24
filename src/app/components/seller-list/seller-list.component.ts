import { Component, OnInit } from '@angular/core';

interface Seller {
  id: number;
  name: string;
  logo: string;
  productTitle: string;
  shippingInfo: string;
  deliveryTime: string;
  price: number;
  rating?: number;
}

@Component({
  selector: 'app-seller-list',
  standalone: false,
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit {
  sellers: Seller[] = [
    {
      id: 1,
      name: 'Compumall',
      logo: '/assets/Compumall-logo.png',
      productTitle: 'Apple iPhone 16 Pro Max 6.9" 256GB Black titanium --> Delivered to us, expected delivery d...',
      shippingInfo: 'Free shipping',
      deliveryTime: '4-5 days',
      price: 18423,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Macrent',
      logo: '/assets/Macrent-logo.png',
      productTitle: 'iPhone 16 Pro Max 256GB Natural Titanium',
      shippingInfo: 'Back order',
      deliveryTime: '',
      price: 17485
    },
    {
      id: 3,
      name: 'POWER',
      logo: '/assets/Power-logo.png',
      productTitle: 'Apple iPhone 16 Pro Max 256 GB, Natural Titanium',
      shippingInfo: 'Free shipping',
      deliveryTime: '1-2 days',
      price: 17489,
      rating: 4.1
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  viewDeal(sellerId: number): void {
    console.log(`Viewing deal from seller ${sellerId}`);
  }
}