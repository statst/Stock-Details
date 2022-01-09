import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stocks.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records1',
  templateUrl: './stock-records1.component.html',
  styleUrls: ['./stock-records1.component.css']
})
export class StockRecords1Component implements OnInit {
  public stockRecords: IStockDetail[];
  constructor(private stockService: StockService) { 
    this.stockRecords = [];
  }

  public ngOnInit(): void {
    this.initializeStockRecords();
  }

  public initializeStockRecords():void{
    this.stockRecords = this.stockService.getStockDetails().splice(0,2)
  }
}
