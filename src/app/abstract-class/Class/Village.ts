import { NaselPunct } from "./NaselPunct";

export class Village extends NaselPunct {
    S: number;
    h: number; //кількість будинків
    c: number; // кількість людей в домі

    constructor(override name: string, S: number, h: number, c: number)
    {
        super(name);
        this.S = S;
        this.h = h;
        this.c = c;
    }

    calculatePopulation() {
        this.population = this.h * this.c / this.S;
    }
}