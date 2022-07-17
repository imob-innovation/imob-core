import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImobCoreModule } from 'imob-core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImobCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
