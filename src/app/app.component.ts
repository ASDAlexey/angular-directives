import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages = {
    one: 'One is awesome',
    two: 'Two is better',
    three: 'Three is best'
  };

  constructor() {
    setInterval(() => {
      this.messages = {
        one: 'One is awesome' + Math.random().toString().slice(0, 3),
        two: 'Two is better' + Math.random().toString().slice(0, 3),
        three: 'Three is best' + Math.random().toString().slice(0, 3),
      };
    }, 1000);
  }
}
