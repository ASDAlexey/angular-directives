import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OnlineService {
  online = true;

  constructor() {
    setInterval(() => (this.online = Math.random() > .5), 1000);
  }
}
