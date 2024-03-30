import {Show_console} from "./Show_console";
import {Show_desktop} from "./Show_desktop";
import {Bird} from "./Bird";
import { Parnokopitne } from "./Parnokopitne";

describe('Тесування класів Bird та Parnokopitne', ()=>{
    let shower: Show_console;
    let shower2: Show_desktop;
    let bird: Bird;
    let parnokopitne: Parnokopitne;

    beforeEach(()=>{
        shower = new Show_console();
        shower2 = new Show_desktop();
        bird = new Bird(" 1 ", 0.2, shower);
        parnokopitne = new Parnokopitne(" 2 ", 45, shower);
    })

    it ("Створення екземпляру класу Show_console", ()=>{
        expect(shower).toBeTruthy();
    })

    it ("Створення екземпляру класу Show_desktop", ()=>{
        expect(shower2).toBeTruthy();
    })

    it ("Створення екземпляру класу Bird", ()=>{
        expect(bird).toBeTruthy();
    })

    it ("Створення екземпляру класу Parnokopitne", ()=>{
        expect(parnokopitne).toBeTruthy();
    })
})