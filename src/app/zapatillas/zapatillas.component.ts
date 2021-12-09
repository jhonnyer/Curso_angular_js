import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import {ZapatillaService} from '../servicios/zapatilla.service';

@Component({
    selector:'zapatillas',
    templateUrl:'zapatillas.component.html',
    styleUrls: ['zapatilla.component.css'],
    // cargar el servicio zapatillaService
    providers:[ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    // public titulo:string;
    public titulo:string="Componente de zapatillas";
    public zapatillas:Array<Zapatilla>; //crfea array zapatillas que importa los datos del modelo Zapatillas 
    public marcas:string[]; //Creo el array marcas
    public color:string; //directiva ngSwitch 
    public mi_marca:string; //Directiva NgModule
    // public index:number;
    // cargar el servicio ZapatillaService como una propiedad en el constructor
    constructor(
        private _zapatillaService:ZapatillaService
    ){
        // this.index=0;
        this.mi_marca="Fila";
        this.color="yellow";
        this.marcas=new Array(); //Instancio un nuevo objeto del array marcas
        this.zapatillas=[]; //inicializa array zapatillas 
        // this.titulo="Componente de Zapatillas";
        // Este objeto vamos a incluirlo como un servicio en this.zapatillas.service.ts 
        // this.zapatillas=[
        //     new Zapatilla('Reebook Classic', 'Rebook','Blanco',129990,true),
        //     new Zapatilla('Nike Classic', 'Nike','Azul',290000,true),
        //     new Zapatilla('Adidas Classic', 'Adidas','Verde',136000,true),
        //     new Zapatilla('Reebook Modern', 'Rebook','Negro',98700,true),
        //     new Zapatilla('Croydon Classic', 'Croydon','Azul',119900,false)
        // ];
    }
    ngOnInit(){
        // obtener los datos del modelo zapatillas mediante el servicio ZapatillasService
        this.zapatillas=this._zapatillaService.getZapatillas(); //devuelve un array de zapatillas 
        console.log("Array Zapatillas");
        console.log(this.zapatillas);
        alert(this._zapatillaService.getTexto()); //llama la funcion getTexto desde un servicio 
        this.getMarcas();
    }
    // Recorrer una coleccion de objetos, en este caso zapatillas
    getMarcas(){
        // funcion de callback que permite recorrer con forEach el objeto zapatillas. 
        // Las propiedades del objeto se almacenan en la variable value en este caso, y el index en index
        this.zapatillas.forEach((value,index)=>{
            // filtro:  si el elemento no existe o no lo encuentra, añade al array marcas el valor marca
            // Si hay dos objetos con la misma this.marcas, en el array solo guarda una vez el valor de la propiedad 
            if(this.marcas.indexOf(value.marca)<0){
                this.marcas.push(value.marca); //En el array marcas guardo unicamente la propiedad marca abastraida del objeto zapatillas
                console.log(index); //imprimo en index de la propiedad    
            }
        });
        console.log(this.marcas); //Imprime el array marcas
    }

    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca); //Añado el valor guardado en mi_marca al array marcas
    }
    borrarMarca(indice:any){
        // delete this.marcas[index];//se pasa el valor del index que se esta recibiendo en el boton borrar 
        this.marcas.splice(indice,1); //eliminar una propiedad o los valores de un array de objetos
        // El valor 1 indica cuantos elementos quiero borrar despues de presionado el boton 
    }
    onBlur(){
        console.log("Has salido del input");
    }
    //(keyup.enter)="MostrarPalabra" evento que permite capturar cuando se presiona la tecla enter
    MostrarPalabra(){ 
        alert(this.mi_marca);
    }
}