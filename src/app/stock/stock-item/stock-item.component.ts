import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { last } from 'rxjs';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent{
  @Input() public stock!: Stock;
  @Output() toggleFavorite!: EventEmitter<Stock>;

  constructor(){
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event: any){
    this.toggleFavorite.emit(this.stock);
  }
}
