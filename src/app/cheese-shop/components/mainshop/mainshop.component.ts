import { Component, Input, OnInit } from '@angular/core';
import { Cheese } from './cheese.model';

@Component({
  selector: 'app-mainshop',
  templateUrl: './mainshop.component.html',
  styleUrls: ['./mainshop.component.css'],
})
export class MainshopComponent implements OnInit {
  @Input() fromage: Cheese;

  constructor() {}

  ngOnInit(): void {}
}
