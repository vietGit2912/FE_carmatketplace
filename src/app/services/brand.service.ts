import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Constants } from '../config/constanst';
import { Brand } from '../models/brand';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  baseURL = Constants.API_BASE_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.baseURL + '/brands').pipe(
      tap((_) => this.errorHandler.log('fetched brands')),
      catchError(this.errorHandler.handleError<Brand[]>('getBrands', []))
    );
  }

  getBrand(brand_name: string): Observable<Brand> {
    return this.httpClient
      .get<Brand>(this.baseURL + `/brand/${brand_name}`)
      .pipe(
        tap((_) => this.errorHandler.log(`fetched brand name=${brand_name}`)),
        catchError(
          this.errorHandler.handleError<Brand>(`getBrand name=${brand_name}`)
        )
      );
  }

  createBrand(brand: Brand): Observable<any> {
    return this.httpClient
      .post(this.baseURL + `/brand`, brand, this.httpOptions)
      .pipe(
        tap((_) => this.errorHandler.log(`create brand name=${brand.name}`)),
        catchError(
          this.errorHandler.handleError<Brand>(`createBrand name=${brand.name}`)
        )
      );
  }

  updateBrand(brand: Brand): Observable<any> {
    return this.httpClient
      .patch(this.baseURL + `/brand/${brand.id}`, brand, {
        observe: 'response',
      })
      .pipe(
        tap((_) => this.errorHandler.log(`updated brand name=${brand.name}`)),
        catchError(this.errorHandler.handleError<Brand>('updateBrand'))
      );
  }

  deleteBrand(brand: Brand): Observable<any> {
    return this.httpClient.delete(this.baseURL + `/brand/${brand.id}`).pipe(
      tap((_) => this.errorHandler.log(`delete brand name=${brand.name}`)),
      catchError(this.errorHandler.handleError<Brand>('deleteBrand'))
    );
  }
}
