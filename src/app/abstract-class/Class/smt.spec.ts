import { SMT } from './SMT' ;


describe('SMT Testing', () => {
    let smt:SMT;

    //перед виконанням створюємо екземпляр смт
    beforeEach(()=>
    {
       smt = new SMT("SMT", 2000, 8000);
    })

    fit("Створення екземплярів класу", ()=>{

        expect(smt).toBeTruthy();
    })

    it ('Створення екземпляру класу з відємними значенням площі',()=> {
        expect(()=> new SMT("SMT", -2000, 8000)).toThrow(new Error('S<=0'));
    } );

    it ('Створення екземпляру класу з відємними значенням населення',()=> {
        expect(()=> new SMT("SMT", 2000, -8000)).toThrow(new Error('S<=0'));
    } );

    it ('Розрахунок щільності населення 8000 на 2000 кв км',()=> {
        smt.calculatePopulation();
        let PS = smt.population;
        let h = smt.h;
        let S = smt.S;
        let P = h/S;
        expect(PS.toFixed(2)).toBe(P.toFixed(2));
    } );
})