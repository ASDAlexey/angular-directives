import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { BasicComponent } from './basic/basic.component';
import { TrackDirective } from './track.directive';
import { OnlineDirective } from './online.directive';
import { ThreeDirective } from './three.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective,
    BasicComponent,
    TrackDirective,
    OnlineDirective,
    ThreeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
