import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { capitalizadoPipe } from './pipesPersonalizados/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: "es"} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
