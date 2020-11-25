import { Component, Input, OnInit } from '@angular/core';
import { Cheese } from '../../model/cheese.model';
import cheeses from '../../model/cheese.json';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList: Object = cheeses;

  constructor() {}

  ngOnInit(): void {}

  ajouterPanier(Cheese){
		//PanierComponent.panierList
	}
}
