import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-template-storage',
  templateUrl: './template-storage.component.html',
  styleUrls: ['./template-storage.component.scss']
})
export class TemplateStorageComponent implements AfterViewInit {
  @ViewChild('header') headerTemplate;

  constructor(private service: TemplateService) {
    this.service.templates.set('header', this.headerTemplate);
  }

  ngAfterViewInit() {
    // store the template
  }
}
