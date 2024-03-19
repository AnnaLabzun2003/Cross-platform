import { Village } from './Village' ;


describe('SMT Testing', () => {
    let village:Village;

    //перед виконанням створюємо екземпляр смт
    beforeEach(()=>
    {
        village = new Village("Village", 2000, 3, 30);
    })

    fit("Створення екземплярів класу", ()=>{

        expect(village).toBeTruthy();
    })

    it ('Створення екземпляру класу з відємними значенням площі',()=> {
        expect(()=> new Village("Village", -2000, 3, 30)).toThrow(new Error('S<=0'));
    } );

    it ('Створення екземпляру класу з відємними значенням будинків',()=> {
        expect(()=> new Village("Village", 2000, -3, 30)).toThrow(new Error('S<=0'));
    } );

    it ('Створення екземпляру класу з відємними значенням людей',()=> {
        expect(()=> new Village("Village", 2000, 3, -30)).toThrow(new Error('S<=0'));
    } );


    it ('Розрахунок щільності населення 8000 на 2000 кв км',()=> {
        village.calculatePopulation();
        let PS = village.population;
        let h = village.h;
        let S = village.S;
        let c = village.c;
        let P = h*c/S;
        expect(PS.toFixed(2)).toBe(P.toFixed(2));
    } );
})