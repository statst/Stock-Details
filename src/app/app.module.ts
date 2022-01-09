import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockRecords1Component } from './components/stock-records1/stock-records1.component';
import { StockRecords2Component } from './components/stock-records2/stock-records2.component';
import { StocksComponent } from './components/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    StockRecords1Component,
    StockRecords2Component,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
