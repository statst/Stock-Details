import { Component, OnInit } from '@angular/core';
import { IStockDetail } from 'src/app/models/stocks.model';

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
  constructor() {

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
    this.stockDetails = [{
      id: 1,
      stockName: "BioScrip, Inc.",
      stockMarketCap: 306.888888888888809,
      stockMSector: "Health Care",
      releaseDate: "01/06/2021",
      symbol: "BIOS"
    }, {
      id: 2,
      stockName: "RiceBran Technologies",
      stockMarketCap: 9.62,
      stockMSector: "Consumer Non-Durables",
      releaseDate: "11/05/2021",
      symbol: "RIBT"
    }, {
      id: 3,
      stockName: "John Hancock Investors Trust",
      stockMarketCap: 152.46,
      stockMSector: "Health Care",
      releaseDate: "12/05/2021",
      symbol: "JHI"
    }, {
      id: 4,
      stockName: "Yatra Online, Inc.",
      stockMarketCap: 398.74,
      stockMSector: "Consumer Services",
      releaseDate: "10/03/2021",
      symbol: "YTRA"
    }, {
      id: 5,
      stockName: "Restaurant Brands International Inc.",
      stockMarketCap: 14.34,
      stockMSector: "Consumer Services",
      releaseDate: "06/07/2021",
      symbol: "QSR"
    }]

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
