import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainshopComponent } from './components/mainshop/mainshop.component';
import { PanierComponent } from './components/panier/panier.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { EasterEggComponent } from './components/template/easter-egg/easter-egg.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainshopComponent,
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
  {
    path: '**',
    component: FormulaireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
