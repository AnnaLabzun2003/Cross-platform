import { Country} from "./Country";

export class CountryList{
    country=new Map();
        constructor(){
            this.country.set(0, {id:0,name:"Україна"});
            this.country.set(1, {id:1,name:"Чехія"});
        }

    add(country: Country){
        this.country.set(country.id, {id:country.id, name:country.name});

    }
}