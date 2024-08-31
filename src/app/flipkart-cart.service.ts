import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartCartService {

  constructor(private httpClient:HttpClient) { }
  getPrduct():Observable<any>
  {
  return this.httpClient.get('https://fakestoreapi.com/products')
  }
}
