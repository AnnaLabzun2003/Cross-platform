import { ConfigService } from "./config.service";
import { City } from "./City";

export class CityList {
    private cityList: City[] = [];
    private searchCity: City[] = [];
    
    searchCityResult: string[] = [];

    constructor(private configService: ConfigService) {
        let city = new City();
        city.name = "Київ";
        city.country_id = 0;
        this.add(city);

        let city1 = new City();
        city1.name = "Прага";
        city1.country_id = 1;
        this.add(city1);

        this.search(0);

        this.configService.country$.subscribe(() => {
            let country = this.configService.country$.value;
            this.search(country.id);
        });
    }

    add(city: City) {
        this.cityList.push(city);
        this.search(city.country_id);
    }

    search(id_country: number) {
        this.searchCity = this.cityList.filter((city) => city.country_id == id_country);
        this.searchCityResult = [];
        this.searchCity.forEach(el => {
            this.searchCityResult.push("Назва міста: " + el.name);
        });
    }
}
