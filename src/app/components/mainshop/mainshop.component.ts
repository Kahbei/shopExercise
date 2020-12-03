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

  selectCategory(category: String) {
    return (this.category = category);
  }

  displayCategory(listC) {
    /*switch (this.category) {
      case 'Vache':
        listC.some((e) => e.hasOwnProperty('quantite'))
        break;

      case 'Brebis':
        listC.some((e) => e.hasOwnProperty('quantite'))
        break;

      case 'Chevre':
        listC.some((e) => e.hasOwnProperty('quantite'))
        break;

      case 'Autre':
        listC.some((e) => e.hasOwnProperty('quantite'))
        break;

      default:
        break;
    }*/
    /*this.cheeselist.forEach(cheeseList => {
    if(cheeseList.category === category) {this.data.push(cheeseList);}
    else if(category ==='All'){this.data.push(cheeseList);}
    });*/
  }

  ngOnInit(): void {
    this.getCheesesList();
  }
}
