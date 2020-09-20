import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19service {

  private url = "/api/"
  constructor(private httpClient: HttpClient) { }

  getCovidDetail(country: String) :Observable<String> {
    return this.httpClient.get<String>(this.url+"covid19/getDetail?country="+country);
  }
}
