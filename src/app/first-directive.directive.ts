import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]',
})
export class FirstDirectiveDirective {
  @Input() appFirstDirective;

  @HostBinding() get innerText() {
    return this.appFirstDirective;
  }
}
