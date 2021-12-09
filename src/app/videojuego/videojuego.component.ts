import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl:'videojuego.component.html',
    styleUrls: ['videojuego.component.css']
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    // propiedades de la clase 
    public titulo:string;
    public listado:string;
    constructor() { 
        this.titulo="Componentes de videojuego";
        this.listado="Listado de los juegos mas populares";
        console.log("Componente videojuego cargado");
    }

    ngOnInit() { 
        console.log("OnInit cargado");
    }
    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log("DoCked ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    CambiarTitulo(){
        this.titulo="Titulo componentes videojuego modificado";
    }
}