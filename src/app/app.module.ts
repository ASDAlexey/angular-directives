import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { BasicComponent } from './basic/basic.component';
import { TrackDirective } from './track.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective,
    BasicComponent,
    TrackDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
