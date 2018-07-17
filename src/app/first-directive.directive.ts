import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]',
})
export class FirstDirectiveDirective {
  @HostBinding() innerText = 'I\'m a directive';

  constructor() {}
}
