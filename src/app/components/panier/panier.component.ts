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
    if (cheese.quantite === 0){
      console.log("cheese delete => " + cheese.name)
      this.supprimerFromage(cheese)
    }
  }

  calculPrix() {
    this.total = 0;
    this.panier.map((value) => {
      this.total += value.quantite * value.price;
    });
    return this.total;
  }

  supprimerFromage(cheese){
    this.panier.map((value) => {
      if (cheese.name === value.name){
        console.log("info : " + cheese.name)
        this.panier.splice(this.panier.indexOf(value), 1);
      }
    })
  }

  ngOnInit(): void {
    this.panier = this.http.getPanier();
  }
}
