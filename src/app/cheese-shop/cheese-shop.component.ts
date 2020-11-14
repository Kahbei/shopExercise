import { Component, OnInit } from '@angular/core';
import { Cheese } from './components/mainshop/cheese.model';

@Component({
  selector: 'app-cheese-shop',
  templateUrl: './cheese-shop.component.html',
  styleUrls: ['./cheese-shop.component.css'],
})
export class CheeseShopComponent implements OnInit {
  fromages: Cheese[];

  constructor() {
    /**
     * new Cheese (nom, catégorie, prix, image)
     * categorie : Vache, Brebis, Chèvre, Autre
     */

    this.fromages = [
      new Cheese('Mamelou', 'Autre', 8.1, ''),
      new Cheese('St-Vergeron', 'Autre', 9.25, ''),
      new Cheese("Pont-l'évêque", 'Vache', 10.5, ''),
      new Cheese("Bleu d'Auvergne", 'Vache', 13.9, ''),
      new Cheese('Le Trou du Cru', 'Vache', 3.99, ''),
      new Cheese('Belle des champs', 'Vache', 7.59, ''),
      new Cheese('Saint-félicien', 'Vache', 5.99, ''),
      new Cheese('Boule des moines', 'Vache', 4.05, ''),
      new Cheese('Crottin de Chavignol', 'Chèvre', 4.0, ''),
      new Cheese('Pélardon', 'Chèvre', 3.2, ''),
      new Cheese('Selles-sur-cher', 'Chèvre', 6, ''),
      new Cheese('Taupinette', 'Chèvre', 5.9, ''),
      new Cheese('Rigotte de Pélussin', 'Chèvre', 4.51, ''),
      new Cheese('Sainte-Maure de Touraine', 'Chèvre', 10.3, ''),
      new Cheese("P'tit Basque", 'Brebis', 20.75, ''),
      new Cheese('Le Fédou', 'Brebis', 6.5, ''),
      new Cheese('Ossau-iraty', 'Brebis', 11.35, ''),
      new Cheese("Brin d'amour", 'Brebis', 16.0, ''),
      new Cheese('Gabriel Coulet', 'Brebis', 30.22, ''),
      new Cheese('Ovalie', 'Brebis', 6.9, ''),
    ];
  }

  ngOnInit(): void {}
}
