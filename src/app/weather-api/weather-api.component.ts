import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from './weather.service';


export interface weatherpayload {
  name: String;
  value: String;
}

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})

export class WeatherApiComponent implements OnInit {

  cityName: String;
  weatherForm: FormGroup;
  weatherData: JSON;
  displayedColumns: String[] = ['name','value'];
  weatherArray: weatherpayload[] = [];


  constructor(private weatherserice: WeatherService, private router: Router) {
    this.weatherForm = new FormGroup({
      cityName: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cityName = this.weatherForm.get('cityName').value;
    console.log(this.cityName);
    this.weatherserice.getWeather(this.cityName).subscribe(data =>{
      this.weatherData = JSON.parse(JSON.stringify(data));
      this.weatherArray = [
        {name: 'city                  ',value: this.weatherData['name']},
        {name: 'current \nTemperature   ',value: this.covert_kelvin_to_celcius(this.weatherData['main']['temp']).toString()},
        {name: 'current \nTemperature   ',value: this.covert_kelvin_to_celcius(this.weatherData['main']['temp']).toString()},
        {name: 'minimum \nTemperature   ',value: this.covert_kelvin_to_celcius(this.weatherData['main']['temp_min']).toString()},
        {name: 'maximum \nTemperature   ',value:this.covert_kelvin_to_celcius(this.weatherData['main']['temp_max']).toString()},
        {name: 'pressure              ',value: this.weatherData['main']['pressure']},
        {name: 'Humidity              ',value: this.weatherData['main']['humidity']},
        {name: 'Sunrise               ',value: this.convert_Epoch_Time(this.weatherData['sys']['sunrise']).split(',')[1]},
        {name: 'sunset                ',value: this.convert_Epoch_Time(this.weatherData['sys']['sunset']).split(',')[1]},
        {name: 'wind Speed            ',value: this.weatherData['wind']['speed'] + ' km/h'},
        {name: 'currentTime           ', value: this.convert_Epoch_Time(this.weatherData['dt']).split(',')[1]}
      ];
    }, error => {
      console.log("error: "+error.toString());
    });
  }

  covert_kelvin_to_celcius(temp) : number {
    return (temp - 273.15);
  }

  convert_Epoch_Time(time) :String {
    var date = new Date(time*1000);
    return date.toLocaleString();
  }

  isValid(): boolean{
    if(this.weatherArray.length == 0){
      return false;
    }else{
      return true;
    }
  }
}
