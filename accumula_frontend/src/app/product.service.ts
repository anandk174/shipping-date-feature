import { Injectable } from '@angular/core';
import { Product, ProductDetail } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://127.0.0.1:5000"

  constructor(private http: HttpClient, private messageService:MessageService) { }

  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {

    const url = `${this.baseUrl}/shipping/products`
    
    return this.http.get<Product[]>(url).pipe(
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );

  }

  getProduct(id: number): Observable<ProductDetail> {
    // For now, assume that a product with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.baseUrl}/shipping/product/${id}`

    return this.http.get<ProductDetail>(url).pipe(
      tap(_ => this.log(`fetched Product id=${id}`)),
      catchError(this.handleError<ProductDetail>(`getProduct id=${id}`))
    );
  }

}
