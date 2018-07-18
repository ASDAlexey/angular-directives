import { AfterViewInit, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appThree]'
})
export class ThreeDirective implements AfterViewInit {
  constructor(private el: ElementRef, private view: ViewContainerRef, private template: TemplateRef<any>) {
    console.log(el.nativeElement);
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }
}
