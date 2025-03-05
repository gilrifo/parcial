import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}


  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
  getCategories(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

 
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

