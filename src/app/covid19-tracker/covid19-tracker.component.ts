import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Covid19service } from './covid19.service';

export interface covidPayload {
  name: String;
  value: String;
}

@Component({
  selector: 'app-covid19-tracker',
  templateUrl: './covid19-tracker.component.html',
  styleUrls: ['./covid19-tracker.component.css']
})
export class Covid19TrackerComponent implements OnInit {
  
  countryName: String;
  covidform: FormGroup;
  covidData: JSON;
  displayedColumns: String[] = ['name','value'];
  covidArray: covidPayload[] = [];

  constructor(private covid19service: Covid19service) {
    this.covidform = new FormGroup({
      countryName: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.countryName = this.covidform.get('countryName').value;
    console.log(this.countryName);
    this.covid19service.getCovidDetail(this.countryName).subscribe(data =>{
      this.covidData = JSON.parse(JSON.stringify(data));
      this.covidArray=[
        {name:'location',value: this.covidData['data']['location']},
        {name:'confirmed count', value: this.covidData['data']['confirmed']},
        {name:'deaths count',value: this.covidData['data']['deaths']},
        {name:'recovered count',value: this.covidData['data']['recovered']},
      ]
    }, error =>{
      console.log("error:"+error.toString());
    });
  }

  isValid(): boolean{
    if(this.covidArray.length == 0){
      return false;
    }else{
      return true;
    }
  }
}
