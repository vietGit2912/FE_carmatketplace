import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss'],
})
export class BrandDetailComponent implements OnInit {
  brand: Brand | undefined;
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBrandDetail();
  }

  getBrandDetail(): void {
    const name = '' + this.route.snapshot.paramMap.get('name');
    this.brandService.getBrand(name).subscribe((brand: Brand) => {
      this.brand = brand;
    });
  }

  deleteBrand(brand: Brand): void {
    setTimeout(() => {
      this.brandService.deleteBrand(brand).subscribe((brand: Brand) => {
        this.brand = brand;
      });
      this.goBack();
    }, 1000);
  }

  getSearchTerm(term: any) {
    this.searchTerm = term;
  }

  goBack(): void {
    this.location.back();
  }
}
