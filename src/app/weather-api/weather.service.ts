import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'http://localhost:8080/api/weather';
  constructor(private httpClient: HttpClient) { }

  getWeather(cityName: String): Observable<String> {
    return this.httpClient.get<String>(this.url+"/getWeather?cityName="+cityName);
  }
}
