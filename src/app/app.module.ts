import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasterEggComponent } from './components/template/easter-egg/easter-egg.component';
import { MainshopComponent } from './components/mainshop/mainshop.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { PanierComponent } from './components/panier/panier.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HeaderComponent } from './components/template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EasterEggComponent,
    MainshopComponent,
    ThankyouComponent,
    PanierComponent,
    FormulaireComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
