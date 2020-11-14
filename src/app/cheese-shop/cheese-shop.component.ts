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
      new Cheese('Mamelou', 'Autre', 8.1, 'assets/images/mamelou.jpg'),
      new Cheese('St-Vergeron', 'Autre', 9.25, 'assets/images/saint-vergeron.jpg'),
      new Cheese("Pont-l'évêque", 'Vache', 10.5, "assets/images/pont-l'eveque.png"),
      new Cheese("Bleu d'Auvergne", 'Vache', 13.9, "assets/images/bleu-d'auvergne.png"),
      new Cheese('Le Trou du Cru', 'Vache', 3.99, 'assets/images/le-trou-du-cru.jpg'),
      new Cheese('Belle des champs', 'Vache', 7.59, 'assets/images/belle-des-champs.jpg'),
      new Cheese('Saint-félicien', 'Vache', 5.99, 'assets/images/saint-felicien.jpg'),
      new Cheese('Boule des moines', 'Vache', 4.05, 'assets/images/boule-des-moines.jpg'),
      new Cheese('Crottin de Chavignol', 'Chèvre', 4.0, 'assets/images/crottin-de-chavignol.jpg'),
      new Cheese('Pélardon', 'Chèvre', 3.2, 'assets/images/pelardon.jpg'),
      new Cheese('Selles-sur-cher', 'Chèvre', 6, 'assets/images/selles-sur-cher.png'),
      new Cheese('Taupinette', 'Chèvre', 5.9, 'assets/images/taupinette.jpg'),
      new Cheese('Rigotte de Pélussin', 'Chèvre', 4.51, 'assets/images/rigotte-de-pelussin.jpg'),
      new Cheese('Sainte-Maure de Touraine', 'Chèvre', 10.3, 'assets/images/sainte-maure-de-touraine.jpg'),
      new Cheese("P'tit Basque", 'Brebis', 20.75, "assets/images/p'tit-basque.jpeg"),
      new Cheese('Le Fédou', 'Brebis', 6.5, 'assets/images/fedou.jpg'),
      new Cheese('Ossau-iraty', 'Brebis', 11.35, 'assets/images/ossau-iraty.jpg'),
      new Cheese("Brin d'amour", 'Brebis', 16.0, "assets/images/brin-d'amour.jpg"),
      new Cheese('Gabriel Coulet', 'Brebis', 30.22, 'assets/images/gabriel-coulet.jpg'),
      new Cheese('Ovalie', 'Brebis', 6.9, 'assets/images/Ovalie.jpg'),
    ];
  }

  ngOnInit(): void {}
}
