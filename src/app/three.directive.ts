import { AfterViewInit, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appThree]'
})
export class ThreeDirective {
  @Input() set appThreeOf({ one, two, three }) {
    this.view.createEmbeddedView(this.template, { $implicit: one });
    this.view.createEmbeddedView(this.template, { $implicit: two });
    this.view.createEmbeddedView(this.template, { $implicit: three });
  }

  constructor(private el: ElementRef, private view: ViewContainerRef, private template: TemplateRef<any>) {}
}
