import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CurrencyConvertorModule} from './currency-convertor/currency-convertor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CurrencyConvertorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
