import { Component, Input, OnInit } from '@angular/core';
import cheeses from '../../model/cheese.json';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList: Object = cheeses;
  panierList = [];

  constructor(private http: ShopService) {}

  ngOnInit(): void {}

  // Peut-être à retravailler vu l'utilisation du service http
  ajouterPanier(cheese) {
    this.panierList.push(cheese);
    this.http.addToCart(this.panierList).subscribe();
  }
}
