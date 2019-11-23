import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

import {CurrencyRateService} from '../services/currency-rate.service';


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss']
})
export class CurrencyConvertorComponent implements OnInit {

  model: any = {};
  targetCurrency = 'USD';
  fromCurrency = 'EUR';
  currencyInput = 0;
  convertedCurrency = 0;
  currencyConversionRate = 0;
  currencies = ['USD', 'GBP', 'EUR', 'BTC'];


  constructor(private currencyRateService: CurrencyRateService) {

  }

  ngOnInit() {
    this.getCurrencyRates();
  }

  public getCurrencyRates() {
    const path = `&from_currency=${this.fromCurrency}&to_currency=${this.targetCurrency}`;
    this.currencyRateService.getCurrencyRate(path).subscribe((conversionRate) => {
      this.currencyConversionRate = +conversionRate;
      this.calculateCurrency();
    });
  }

  public calculateCurrency() {
      this.convertedCurrency = this.currencyInput * this.currencyConversionRate;
  }

  public handleCurrencyChange() {
    this.getCurrencyRates();

  }

  public handleInputChange() {
    console.log(this.currencyInput);
    this.calculateCurrency();
  }

}
