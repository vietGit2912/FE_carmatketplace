import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Car } from '../models/car';
import { ErrorHandlerService } from './error-handler.service';
import { Constants } from '../config/constanst';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  baseURL = Constants.API_BASE_URL;

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {
    console.log(this.baseURL);
  }

  get_car_by_brand_name(brand_name: string): Observable<Car[]> {
    return this.httpClient
      .get<Car[]>(this.baseURL + `/${brand_name}` + '/cars')
      .pipe(
        tap((_) =>
          this.errorHandler.log(`get car by brand name=${brand_name}`)
        ),
        catchError(
          this.errorHandler.handleError<Car[]>('get_car_by_brand_name')
        )
      );
  }

  get_brand_car_by_contained_keyword(
    brand_name: string,
    keyword: string
  ): Observable<Car[]> {
    return this.httpClient
      .get<Car[]>(
        this.baseURL + `/${brand_name}/` + `search?keyword=` + keyword
      )
      .pipe(
        tap((_) =>
          this.errorHandler.log(`get car by contained keyword =${keyword}`)
        ),
        catchError(
          this.errorHandler.handleError<Car[]>(
            'get_brand_car_by_contained_keyword'
          )
        )
      );
  }
}
