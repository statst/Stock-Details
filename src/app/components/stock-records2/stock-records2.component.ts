import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stocks.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records2',
  templateUrl: './stock-records2.component.html',
  styleUrls: ['./stock-records2.component.css']
})
export class StockRecords2Component implements OnInit {
  public stockRecords: IStockDetail[];
  constructor(private stockService: StockService) { 
    this.stockRecords = [];
  }

  public ngOnInit(): void {
    this.initializeStockRecords();
  }

  public initializeStockRecords():void{
    this.stockRecords = this.stockService.getStockDetails().splice(3,5)
  }

}

