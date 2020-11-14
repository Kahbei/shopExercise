import { Component, OnInit } from '@angular/core';
import { Cheese } from './components/mainshop/cheese.model';

@Component({
  selector: 'app-cheese-shop',
  templateUrl: './cheese-shop.component.html',
  styleUrls: ['./cheese-shop.component.css'],
})
export class CheeseShopComponent implements OnInit {
  fromages: Cheese[];

  constructor() {
    // nom, catégorie, prix, image
    this.fromages = [new Cheese('St Marcelin', 'Coulant', 5.2, 'prout')];
  }

  ngOnInit(): void {}
}
