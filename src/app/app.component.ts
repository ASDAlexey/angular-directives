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
}
