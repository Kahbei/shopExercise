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
  dansPanier = false;

  // getCheeses(): Observable<Cheese[]> {
  //   return of(CHEESE);
  // }

  // En cours de construction DO NOT TOUCH PLS
  getCheeses() {
    return this.http.get(`${environment.baseURL}/api/cheese`);
  }

  addToCart(cart) {
<<<<<<< HEAD
    const Object = {
      quantite:1,
    }
    cart.quantite = 1
    this.panier.push(cart)
=======
    this.panier.push(cart);
>>>>>>> 315e5668c2f3df7c9627f56377d1678771f55429
    //console.log('hello ' + this.panier)
    return;
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
  true = quantite++
  false = on ajoute dans panier
  */
  verifDoubon(cart){
    this.panier.forEach(function (value) {
      if (value.name === cart.name) {
        value.quantite++
        this.dansPanier = true
      }
      
    })
    if (this.dansPanier === false) {
      //mettre dans panier
      this.addToCart(cart)
    }

    }
}
