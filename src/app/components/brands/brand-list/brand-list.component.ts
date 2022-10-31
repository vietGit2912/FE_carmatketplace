import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent implements OnInit {
  @Input() brands: Brand[] = [];
  @Input() searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  delete(brand_name: string): void {
    console.log(brand_name);
  }
}
