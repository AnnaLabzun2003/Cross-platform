import {IShow } from "../interface/IShow";
import {IMove } from "../interface/IMove";
import {IAnimal } from "../interface/IAnimal";
import { Random} from "./Random";

export class Bird implements IAnimal, IMove{
    name: string;
    weight: number;
   
   

    constructor(name: string, weight: number, shower: IShow ){
        this.name = name;
        this.weight = weight;
        this.kind;
        shower.show("Пташка " + this.name + " має вагу " + this.weight + " кг та відноситься до виду " + this.kind + ". ")
    }

    get kind(){
        let random = new Random();
        let n = random.getRandomInt(3);

        if (n == 0) return "синичка"
        else if (n == 1) return "ворона"
        else return "дятел"
    }

    move(){
        return "Я літаю "
    }
}