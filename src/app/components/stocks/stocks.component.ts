import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stocks.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public stockInfo: string;
  public stockNumber: number;
  public stockdetail : IStockDetail;

  public isEditStockButtonClicked : Boolean;
  constructor() {
      this.stockInfo = '';
      this.stockNumber = 0;
      // this.stockdetail ={
      //   id: 0,
      //   stockName: "",
      //   stockMarketCap: 0,
      //   stockMSector: "",
      //   releaseDate: "",
      //   symbol: ""
      // };   
      this.isEditStockButtonClicked = false;
      this.stockdetail = {} as IStockDetail;
   }

  public ngOnInit(): void {
    this.stockInfo = 'Test Stock';
    this.stockNumber = 10;
    this.stockdetail = {
      id: 1,
      stockName: "BioScrip, Inc.",
      stockMarketCap: 306.888888888888809,
      stockMSector: "Health Care",
      releaseDate: "01/06/2021",
      symbol: "BIOS"
    }
  }

  public editStock(): void{
    this.isEditStockButtonClicked = true;
  }

  public updateStock(): void{
    this.isEditStockButtonClicked = false;
  }

}
