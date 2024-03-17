export abstract class NaselPunct {
    name: string;
    population: number;

    constructor(name: string) { 
        this.name = name;
        this.population = 0;
    }

    show() {
        let message = `Назва: ${this.name}, щільність населення: ${this.population.toFixed(2)}, людини на км2`;
        return message;
    }

    abstract calculatePopulation(): any;
}