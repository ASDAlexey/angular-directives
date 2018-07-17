import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  logs = [];

  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }

  constructor() { }
}
