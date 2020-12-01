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
  test = [];

  constructor(private http: ShopService) {}

  // getCartItems(): void {
  //   this.http.getCart();
  // }

  ajoutFromage(Cheese){
    Cheese.quantite++
  }

  suppressionFromage(Cheese){
    Cheese.quantite--
  }

  ngOnInit(): void {
    this.panier = this.http.getPanier();
    //console.log(this.panier)
  }
}
