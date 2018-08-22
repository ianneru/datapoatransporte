import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OnibusListagemModule } from './onibus-listagem/onibus-listagem.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,OnibusListagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
