import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stocks.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  //variable declaration
  public stockInfo: string;
  public stockNumber: number;
  public stockdetail : IStockDetail;
  public stockDetails: IStockDetail[];

  public isEditStockButtonClicked : Boolean;
  public isEditStockButtonClickedDetails : Boolean[];
  constructor(private stockService: StockService) {

    // variable initialization at the constructor level
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
      this.stockDetails = [];
      this.isEditStockButtonClickedDetails = []
   }

  public ngOnInit(): void {

    // value assgination at start of angular compiler involved life cycle
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
    // Array list of objects
    this.stockDetails = this.stockService.getStockDetails();

    this.fillEditButtonArray();
  }


  public editStock(index:number): void{
    this.isEditStockButtonClickedDetails[index] = true;
  }

  public updateStock(index:number): void{
    this.isEditStockButtonClickedDetails[index] = false;
  }

  public fillEditButtonArray():void{
    for (let index = 0; index < this.stockDetails.length; index++) {
      this.isEditStockButtonClickedDetails[index] = false;
    }
  }

}
