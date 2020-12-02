import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private shopService: ShopService) {}

  getTotalItem() {
    return this.shopService.getTotalItemCart();
  }

  ngOnInit(): void {
    this.getTotalItem();
  }
}
