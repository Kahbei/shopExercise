import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList;
  category;
  data = [];
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
  /* SelectedCategoryCheese(category:string){
 
    this.cheeselist.forEach(cheeseList => {
    if(cheeseList.category === category) {this.data.push(cheeseList);}
    else if(category ==='All'){this.data.push(cheeseList);}
    });
  }
  GetChesseCategory(){
    return this.data;
  }*/

  selectCategory(category: String) {
    //
  }
}
