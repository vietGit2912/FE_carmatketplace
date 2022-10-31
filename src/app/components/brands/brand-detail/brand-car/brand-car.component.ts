import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand-car',
  templateUrl: './brand-car.component.html',
  styleUrls: ['./brand-car.component.scss'],
})
export class BrandCarComponent implements OnInit, OnChanges {
  @Input() brandName: string = '';
  @Input() searchText: string = '';
  listcar: Car[] | undefined;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.carService
      .get_brand_car_by_contained_keyword(
        this.brandName,
        changes['searchText'].currentValue
      )
      .subscribe((resp) => {
        this.listcar = resp;
      });
  }

  getCars(): void {
    this.carService
      .get_car_by_brand_name(this.brandName)
      .subscribe((data: any) => {
        this.listcar = data;
      });
  }
}
