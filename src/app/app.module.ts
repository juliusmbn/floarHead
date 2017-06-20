import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalScrollComponent } from './vertical-scroll/vertical-scroll.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { XScrollComponent } from './x-scroll/x-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalScrollComponent,
    HorizontalScrollComponent,
    XScrollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
