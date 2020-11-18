import { Component, Input, OnInit } from '@angular/core';
import { Cheese } from '../../model/cheese.model';
import cheeses from '../../model/cheese.json';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  cheeseList: Object = cheeses;

  constructor() {}

  ngOnInit(): void {}
}
