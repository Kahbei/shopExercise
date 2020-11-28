import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList;

  constructor(private http: ShopService) {}

  getCheesesList(): void {
    this.http
      .getCheeses()
      .subscribe((cheeselist) => (this.cheeseList = cheeselist));
  }

  ajouterPanier(idCheese, cheese): void {
    const panierList = {
      id: idCheese,
      cheese,
    };
    this.http.addToCart(panierList).subscribe((e) => {
      this.getCheesesList();
      console.log('clodoman');
    });
  }

  ngOnInit(): void {
    this.getCheesesList();
  }
}
