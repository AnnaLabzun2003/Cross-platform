import {IShow } from "../interface/IShow";
export class Show_console implements IShow{
    show(s:string)
    {
        console.log(s);
    }
}