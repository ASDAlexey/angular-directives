import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { BasicComponent } from './basic/basic.component';
import { TrackDirective } from './track.directive';
import { OnlineDirective } from './online.directive';
import { ThreeDirective } from './three.directive';
import { TemplateStorageComponent } from './template-storage/template-storage.component';
import { SurroundDirective } from './surround.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective,
    BasicComponent,
    TrackDirective,
    OnlineDirective,
    ThreeDirective,
    TemplateStorageComponent,
    SurroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
