import {IAnimal} from "../interface/IAnimal";
export abstract class Mammal implements IAnimal{
    name: string;
    weight: number;

    constructor(name: string, weight: number){
        this.name = name;
        this.weight = weight;
    }
}