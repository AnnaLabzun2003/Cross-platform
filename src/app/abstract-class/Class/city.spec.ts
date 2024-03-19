import { City } from './City' ;


describe('City Testing', () => {
    let city:City;

    //перед виконанням створюємо екземпляр смт
    beforeEach(()=>
    {
        city = new City("SMT", 2000, 8000);
    })

    fit("Створення екземплярів класу", ()=>{

        expect(city).toBeTruthy();
    })

    it ('Створення екземпляру класу з відємними значенням площі',()=> {
        expect(()=> new City("SMT", -2000, 8000)).toThrow(new Error('S<=0'));
    } );

    it ('Створення екземпляру класу з відємними значенням населення',()=> {
        expect(()=> new City("SMT", 2000, -8000)).toThrow(new Error('S<=0'));
    } );

    it ('Розрахунок щільності населення 8000 на 2000 кв км',()=> {
        city.calculatePopulation();
        let PS = city.population;
        let h = city.h;
        let S = city.S;
        let P = h/S;
        expect(PS.toFixed(2)).toBe(P.toFixed(2));
    } );
})