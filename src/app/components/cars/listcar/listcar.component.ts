import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-listcar',
  templateUrl: './listcar.component.html',
  styleUrls: ['./listcar.component.scss'],
})
export class ListcarComponent implements OnInit {
  @Input() listcar: Car[] = [];
  @Input() searchText: string = '';

  constructor() {}
  ngOnInit(): void {}
}
