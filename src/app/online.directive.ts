import { Directive, HostBinding } from '@angular/core';
import { OnlineService } from './online.service';

@Directive({ selector: '[appOnline]' })
export class OnlineDirective {
  @HostBinding('disabled') get disabled() {
    return this.onlineService.online;
  }

  @HostBinding('class.offline') get offline() {
    return this.onlineService.online;
  }

  constructor(private onlineService: OnlineService) {}
}
