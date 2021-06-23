import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
    export class ZapatillaService{
//  Se crea el objeto zapatillas de tipo array 
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('Reebook Classic', 'Rebook','Blanco',129990,true),
            new Zapatilla('Nike Classic', 'Nike','Azul',290000,true),
            new Zapatilla('Adidas Classic', 'Adidas','Verde',136000,true),
            new Zapatilla('Reebook Modern', 'Rebook','Negro',98700,true),
            new Zapatilla('Croydon Classic', 'Croydon','Azul',119900,false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio"
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}