import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';


const routes: Routes = [
  {
    path: 'currency-convertor',
    component: CurrencyConvertorComponent,
  },
  {
    path: '',
    redirectTo: '/currency-convertor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
