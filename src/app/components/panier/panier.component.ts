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
  panierList: object = [
    new Cheese('nom fromgae', 'test', 2, 'test'),
    new Cheese('fromage2', '', 3, ''),
  ];
  panier;

  constructor(private http: ShopService) {
    console.log(this.panier);
  }

  ngOnInit(): void {
    this.http.getCart().subscribe((panier) => (this.panier = panier));
  }
}
