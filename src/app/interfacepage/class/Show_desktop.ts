import {IShow } from "../interface/IShow";
export class Show_desktop implements IShow{
    info: string = ""
    show(s:string)
    {
        this.info = "Інформація про тварину " + s;
    }
}