import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {

    public stocks$: Observable<Stock[]>;
    constructor(private stockService: StockService) {
      this.stocks$ = this.stockService.getStocks();
    }

    ngOnInit() { }

    onToggleFavorite(stock: Stock){
      this.stockService.toggleFavorite(stock);
    }
}
