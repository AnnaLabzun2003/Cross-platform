import {IShow } from "../interface/IShow";
import {IMove } from "../interface/IMove";
import { Mammal} from "./Mammal";
import { Random} from "./Random";

export class Parnokopitne extends Mammal implements IMove{

    constructor(name: string, weight: number, shower: IShow){
        super(name, weight);
        shower.show("Парнокопитне " + this.name + " вагою " + this.weight + " кг, належить до виду " + this.type + ". " )
    }

    get type(){
        let random = new Random();
        let n = random.getRandomInt(3);

        if (n == 0) return "свиня"
        else if (n == 1) return "гіпопотам"
        else return "пекар"
    }

    move(){
        return "Я ходжу на 4 ногах"
    }
}