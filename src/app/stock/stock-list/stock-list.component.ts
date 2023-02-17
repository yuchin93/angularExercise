import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {

    public stocks: Stock[];
    constructor() {
      this.stocks = [
        new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
        new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
        new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
      ];
    }

    ngOnInit() {
    }

    onToggleFavorite(stock: Stock){
      console.log('Favorite for stock ', stock, ' was triggered');
      stock.favorite = !stock.favorite;
    }
}
