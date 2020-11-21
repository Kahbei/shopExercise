import { Component, OnInit } from '@angular/core';
import { Cheese } from '../../model/cheese.model';
import cheeses from '../../model/cheese.json';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
	panierList: Cheese[
		
	];

  constructor() { }

  ngOnInit(): void {
  }

}
