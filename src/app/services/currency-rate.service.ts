import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  endpoint = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&apikey=HWMF34Q228JTM29B';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) {}


  public getCurrencyRate(query): Observable<any> {
    return this.http.get(this.endpoint + query, this.httpOptions).pipe(
    // return this.http.get('../../assets/mock.json', this.httpOptions).pipe(
      map(data => {
        return data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
      }),
      tap((data) => {
        console.log(`Response from Server: ${JSON.stringify(data)}`);
      }),
      catchError(this.handleError<any>('Get Conversion Rate'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any) => {
      console.error(`${operation} failed. Error: ${error.message}`);
      return throwError(error);
    };
  }
}
