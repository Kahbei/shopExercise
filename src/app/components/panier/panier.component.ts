import { Component, OnInit } from '@angular/core';
import { Cheese } from '../../model/cheese.model';
import cheeses from '../../model/cheese.json';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
	panierList: object = [
		new Cheese("nom fromgae","test",2,"test"),
		new Cheese("fromage2","",3,""),
	];

	

  constructor() { }

  ngOnInit(): void {
  }

}
