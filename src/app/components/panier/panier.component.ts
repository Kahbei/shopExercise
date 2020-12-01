import { Component, OnInit } from '@angular/core';
import { Cheese } from 'src/app/model/cheese.model';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panier;
  total = 0;

  constructor(private http: ShopService) {}

  // getCartItems(): void {
    //   this.http.getCart();
    // }

    ajoutFromage(Cheese){
      if (Cheese.quantite >= 0) {
        Cheese.quantite++
      }

    }

    suppressionFromage(Cheese){
      if (Cheese.quantite > 0) {
        Cheese.quantite--
      }
    }

    calculPrix(){
      this.total = 0;
      this.panier.forEach(function (value) {
        this.total = value.quantite * value.price
      })
      return this.total
    }

    ngOnInit(): void {
      this.panier = this.http.getPanier();
      //console.log(this.panier)
    }
  }
