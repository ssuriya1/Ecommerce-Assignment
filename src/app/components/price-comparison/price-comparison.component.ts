import { Component, OnInit } from '@angular/core';

interface FilterOptions {
  onlyInStock: boolean;
  withShipping: boolean;
  deliveryOption: 'default' | 'all' | 'free';
  sortBy: 'default' | 'price' | 'rating';
}

@Component({
  selector: 'app-price-comparison',
  standalone: false,
  templateUrl: './price-comparison.component.html',
  styleUrls: ['./price-comparison.component.scss'],
})
export class PriceComparisonComponent implements OnInit {
  filters: FilterOptions = {
    onlyInStock: false,
    withShipping: false,
    deliveryOption: 'default',
    sortBy: 'default',
  };

  constructor() { }

  ngOnInit(): void { }

  onFilterChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    console.log('Applying filters:', this.filters);
  }

  toggleFilter(filterName: 'onlyInStock' | 'withShipping'): void {
    this.filters[filterName] = !this.filters[filterName];
    this.onFilterChange();
  }
}