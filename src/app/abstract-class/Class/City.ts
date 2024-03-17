import { NaselPunct } from "./NaselPunct";

export class City extends NaselPunct {
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