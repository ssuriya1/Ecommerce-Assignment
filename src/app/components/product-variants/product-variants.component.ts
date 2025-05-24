import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductVariant {
  storage: string;
  color: string;
}

@Component({
  selector: 'app-product-variants',
  standalone: false,
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss'],
})
export class ProductVariantsComponent implements OnInit {
  @Output() variantSelected = new EventEmitter<ProductVariant>();

  selectedStorage: string = '256GB';
  selectedColor: string = 'all';

  storageOptions: string[] = ['1TB', '256GB', '512GB'];
  colorOptions: string[] = ['all', 'black', 'white'];

  constructor() {}

  ngOnInit(): void {
    this.emitSelection();
  }

  isSelected(value: string): boolean {
    return this.selectedStorage === value || this.selectedColor === value;
  }

  onStorageSelect(storage: string): void {
    this.selectedStorage = storage;
    this.emitSelection();
  }

  onColorSelect(color: string): void {
    this.selectedColor = color;
    this.emitSelection();
  }

  private emitSelection(): void {
    this.variantSelected.emit({
      storage: this.selectedStorage,
      color: this.selectedColor,
    });
  }
}
