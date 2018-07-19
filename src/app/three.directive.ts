import { AfterViewInit, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appThree]'
})
export class ThreeDirective {
  @Input() set appThree(value) {
    this.view.createEmbeddedView(this.template, { $implicit: 'Awesome' });
    this.view.createEmbeddedView(this.template, { $implicit: 'Amazing' });
    this.view.createEmbeddedView(this.template, { $implicit: 'Sweet' });
  }

  constructor(private el: ElementRef, private view: ViewContainerRef, private template: TemplateRef<any>) {}
}
