import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CHEESE } from './model/cheese';
import { Observable, of } from 'rxjs';
import { Cheese } from './model/cheese.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getCheeses(): Observable<Cheese[]> {
    return of(CHEESE);
  }

  addToCart(cart) {
    // va ajouter les articles dans le panier
  }

  getCart() {
    // Va retourner la panier
  }
}
