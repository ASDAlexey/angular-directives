import { AfterContentInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  one = { message: 'Hello context' };
  two = { message: 'Hello two' };
  three = { message: 'Hello three' };
}
