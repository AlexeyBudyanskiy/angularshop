import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subscriber, throwError } from 'rxjs';
import { catchError, retry, share, concatMap } from 'rxjs/operators';

import { Product } from '../shared/models';
import { ProductsAPI } from './products.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject(ProductsAPI) private productsUrl: string,
    private http: HttpClient,
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  public getProduct(productId: number): Observable<Product> {
    const url = `${this.productsUrl}/${productId}`;

    return this.http.get<Product>(url)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }

  public createProduct(product: Product): Observable<Product> {
    product.updatedDate = new Date();

    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  public updateProduct(product: Product): Observable<Product> {
    product.updatedDate = new Date();

    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  public deleteProduct(product: Product): Observable<Product[]> {
    const url = `${this.productsUrl}/${product.id}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getProducts()),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
