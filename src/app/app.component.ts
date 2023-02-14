import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stock Market App';

  public stock!: Stock;

  ngOnInit(): void{
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ');
  }

  onToggleFavorite(stock: Stock){
    console.log('Favorite for stock', stock, 'was triggered.');
    this.stock.favorite = !this.stock.favorite;
  }
}
