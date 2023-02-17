import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stock Market App';

  constructor(public messageService: MessageService){ }

  ngOnInit(): void{
    this.messageService.message = 'Hello Message Service!';
  }
}
