import { Component } from '@angular/core';
import {Configuracion} from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  // Propiedad para metodo OnDestroy 
  public mostrar_videojuegos:boolean=true;
  public descripcion:string; //propiedad del modelo de datos
  public config; //Guarda todos las propiedades o datos del modelo en una variable

  constructor(){
    // acceder a la propiedad de un objeto definido en un modelo 
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;
    this.config=Configuracion; //Guarda todos las propiedades o datos del modelo en una variable
  }
  // OcultarVideoJuegos(){
  OcultarVideoJuegos(value:boolean){ //Se pasa un valor value que peude ser false o true
    // this.mostrar_videojuegos=false; //El valor se cambia manualmente a false de mostrar_videojuego
    this.mostrar_videojuegos=value;
  }
}
