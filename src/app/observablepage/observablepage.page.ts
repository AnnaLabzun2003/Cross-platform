import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { City } from './service/City';
import { Country } from './service/Country';
import { CountryList } from './service/CountryList';
import { CityList } from './service/CityList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderModule]
})
export class ObservablepagePage implements OnInit, OnDestroy {
  countries = new CountryList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];

  cityList = new CityList(this.configService);

  country: Country = new Country();
  count = 0;

  constructor() { }

  ngOnInit() {
    const countrySub = this.configService.country$.subscribe(() => {
      this.country = this.configService.country$.value;
    });

    this.subscriptions.push(countrySub);
  }

 

  nextCountry(){
    if (this.count < this.countries.country.size-1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setCountry(this.countries.country.get(this.count));
  }


  addCity(name: any){
    let city = new City();
    city.name=name;
    city.country_id=this.country.id;
    this.cityList.add(city);
  }

  addCountry(county:any){
    let c =new Country();
    c.id = this.countries.country.size;
    c.name = county;
    this.countries.add(c);
    console.log(this.countries);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
