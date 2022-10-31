import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands: Brand[] = [];
  searchTerm: string = '';

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((brands) => (this.brands = brands));
  }

  getSearchTerm(term: any) {
    this.searchTerm = term;
  }
}
