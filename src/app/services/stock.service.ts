import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStockDetail } from '../models/stocks.model';

@Injectable()
export class StockService {
  
  constructor( private http : HttpClient) { }

  public getStockDetails():IStockDetail[]{
    return  [{
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
  }

  public getStockNews(): any{
     return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-09&sortBy=publishedAt&apiKey=362d5cd20958413dbd382057cd77b44f');
  }
}
