import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheeseShopComponent } from './cheese-shop/cheese-shop.component';
import { PanierComponent } from './cheese-shop/components/panier/panier.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { EasterEggComponent } from './components/easter-egg/easter-egg.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CheeseShopComponent,
  },
  {
    path: 'panier',
    component: PanierComponent,
  },
  {
    path: 'formulaire',
    component: FormulaireComponent,
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
  {
    path: 'easteregg',
    component: EasterEggComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
