import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService) {
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm: NgForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      let created = this.stockService.createStock(this.stock);
      if (created) {
        console.log('Successfully created stock with stock code: ' + this.stock.code);
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        console.log('Stock with stock code ' + this.stock.code + ' already exists');
      }
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
