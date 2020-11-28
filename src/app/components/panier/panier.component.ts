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

  getCartItems(): void {
    this.http.getCart().subscribe((panier: Cheese) => {
      this.test.push({
        id: panier.id,
        name: panier.name,
        quantity: 1,
        price: panier.price,
      });
      console.log('Dans panier : ' + this.test + ' panier : ' + panier);
    });
  }

  ngOnInit(): void {
    this.getCartItems();
  }
}
