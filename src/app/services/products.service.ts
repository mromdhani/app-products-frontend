import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {

     return this._httpClient.get<Product[]>(environment.baseURL);
  }

}
