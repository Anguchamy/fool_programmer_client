import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19service {

  private url = "http://localhost:8080/api/covid19"
  constructor(private httpClient: HttpClient) { }

  getCovidDetail(country: String) :Observable<String> {
    return this.httpClient.get<String>(this.url+"/getDetails?country="+country);
  }
}
