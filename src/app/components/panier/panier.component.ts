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

  ajoutFromage(cheese) {
    if (cheese.quantite >= 0) {
      cheese.quantite++;
    }
  }

  enleverFromage(cheese) {
    if (cheese.quantite > 0) {
      cheese.quantite--;
    }
  }

  calculPrix() {
    this.total = 0;
    this.panier.map((value) => {
      this.total += value.quantite * value.price;
    });
    return this.total;
  }

  ngOnInit(): void {
    this.panier = this.http.getPanier();
    console.log(this.panier);
  }
}
