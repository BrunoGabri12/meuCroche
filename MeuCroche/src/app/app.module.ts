import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SuggestedPriceComponent } from './suggested-price/suggested-price.component';
import { CalculatorPriceComponent } from './calculator-price/calculator-price.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggestedPriceComponent,
    CalculatorPriceComponent
],
imports: [
    BrowserModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
