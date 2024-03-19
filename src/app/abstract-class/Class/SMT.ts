import { NaselPunct } from "./NaselPunct";


export class SMT extends NaselPunct {
    S: number;
    h: number;

    constructor(override name: string, S: number, h: number)
    {
        super(name);
        this.S = S;
        this.h = h;
    }

    calculatePopulation() {
        this.population = this.h/this.S;
    }
}