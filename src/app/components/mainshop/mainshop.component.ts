import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList;
  panier = [];

  constructor(private http: ShopService) {}

  getCheesesList(): void {
    this.http
      .getCheeses()
      .subscribe((cheeselist) => (this.cheeseList = cheeselist));
  }

  addToPanier(cheese): void {
    this.http.addToCart(cheese);
  }

  verifPanier(cheese) {
    this.http.verifDoubon(cheese);
  }

  ngOnInit(): void {
    this.getCheesesList();
  }
}
