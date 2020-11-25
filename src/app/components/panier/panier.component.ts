import { Component, OnInit } from '@angular/core';
import { Cheese } from '../../model/cheese.model';
import cheeses from '../../model/cheese.json';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panier;

  constructor(private http: ShopService) {}

  getCartItems() {
    this.http.getCart().subscribe((panier) => {
      this.panier = panier;
      console.log(this.panier);
    });
  }

  ngOnInit(): void {
    this.getCartItems();
  }
}
