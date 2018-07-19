import { AfterViewInit, Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateService } from './template.service';

@Directive({
  selector: '[appSurround]'
})
export class SurroundDirective implements AfterViewInit {
  constructor(private service: TemplateService, private view: ViewContainerRef) {}

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.service.templates.get('header'));
  }
}
