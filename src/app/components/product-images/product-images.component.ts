import { Component, OnInit } from '@angular/core';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  isMain?: boolean;
}

@Component({
  selector: 'app-product-images',
  standalone: false,
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  thumbnails: ProductImage[] = [
    {
      id: 1,
      src: 'assets/iphone-1.png',
      alt: 'iPhone 16 Pro Max Front View',
      isMain: true
    },
    {
      id: 2,
      src: 'assets/iphone-2.png',
      alt: 'iPhone 16 Pro Max Side View'
    },
    {
      id: 3,
      src: 'assets/iphone-3.png',
      alt: 'iPhone 16 Pro Max Back View'
    }
  ];

  isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  selectImage(image: ProductImage): void {
    this.thumbnails.forEach(thumb => thumb.isMain = false);
    image.isMain = true;
  }
}