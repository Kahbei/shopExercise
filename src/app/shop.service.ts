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
  panier = [];

  getCheeses() {
    return this.http.get(`${environment.baseURL}/api/cheese`);
  }

  addToCart(cart) {
    cart.quantite = 1;
    this.panier.push(cart);
    return this.panier;
  }

  getPanier() {
    return this.panier;
  }

  // getCart() {
  //   // Va retourner la panier
  // }

  /*
  Avant d'ajouter dans le panier
  Regarder s'il existe déjà
  */
  verifDoubon(cart) {
    this.panier.map((value) => {
      if (value.name === cart.name) {
        value.quantite++;
      }
    });
    if (!this.panier.some((e) => e.name === cart.name)) {
      this.addToCart(cart);
    }
  }

  // Return the total of item in the cart
  getTotalItemCart() {
    if (this.panier.some((e) => e.hasOwnProperty('quantite'))) {
      return this.panier.map((a) => a.quantite).reduce((a, b) => a + b);
    }
    return 0;
  }
}
