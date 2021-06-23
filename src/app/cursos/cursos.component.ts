import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre:string;
  public id:number;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.nombre="";
    this.id=0;
  }

  ngOnInit(){
    //Recoger el parametro por la url mediante params y subscribe
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre; //del array params abstrae unicamente la propiedad nombre y la asigna a una variable denominada nombre, unicamente saca esa propiedad como un valor
      // this.nombre=params['nombre']; //array asociativo, también funciona
      this.id=+params.id; //Params recupera un dato tipo string, el + permite convertir el dato id del array params en number
      console.log(params); //params recoge todos los datos pasados por la url en un array y console log los imprime en la consola 
      console.log(this.nombre); //imprime unicamente el valor de la propiedad pasada por la url
      console.log(this.id);
      if(this.nombre=='ninguno'){
        this._router.navigate(['/home']); //si se envia por la url el valor ninguno se redirige a la vista home mediante la funcion de navigate
      }
    }); 
  }

  IrZapatillas(){
    // Usualmente se utiliza cuando se hace una peticion ajax 
    this._router.navigate(['/zapatillas']); //redirigir a la vista del componente zapatillas
  }
}
