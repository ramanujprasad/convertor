import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurrencyConvertorComponent } from './currency-convertor.component';
import {MatButtonModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [CurrencyConvertorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule

  ]
})
export class CurrencyConvertorModule { }
