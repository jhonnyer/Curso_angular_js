import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../servicios/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any; //creo variable tipo any que sera utilizada para almacenar el resultado obtenido del observable
  public userId:any; //para consultar usuario por id
  public fecha:any; //pipe de fecha
  public new_user:any;
  public usuario_guardado:any;
  constructor(
    private _peticionesService:PeticionesService
  ) {
    this.userId=1;
    this.new_user={
      "name": "",
      "job": ""
    };
  }

  ngOnInit(){
    console.log("prueba");
    // this.fecha=new Date(2019,5,20); //carga el dato de una fecha especifica
    this.fecha=new Date(); //inicializo la fecha con un objeto date que me trae la fecha actual del dia
    this.CargarUsuario(); //inicializa la funcion cargarUsuario() cuando se cargue la vista de la página
  }
  // funcion que permite cargar los datos de un usuario por medio de una API Rest 
  CargarUsuario(){
    this.user=false; //para que el array cada vez que se carga la funcion esta vacio y se muestre el div de espera cargando cada que se consulte
     //subscribe devuelve un observable. Cada observable tiene un metodo subscribe
    // subscribe permite subscribirse al metodo obervable y coger el resultado que se obtiene de ese metodo 
    // Subscribe tiene dos funciones de callback, una que recoge el resultado y otra que recoge el error
    this._peticionesService.getUser(this.userId).subscribe( //userId se pasa por parametro a la funcion getUser()
      result=>{
        console.log("Resultado consulta API REST");
        console.log(result);
        //Asigno a la variable user los resultados de los datos obtenidos en el observable
        this.user=result.data; //esta variable sera utilizada para desplegar los resultados en la vista del componente
        console.log(this.user);
        },
      error=>{
        console.log(<any>error);
      }
    ); 
  }

  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
      result=>{
        console.log("prueba");
        console.log(result);
        // console.log(response.data);
        this.usuario_guardado=result;
        console.log(this.usuario_guardado);
        // borro datos del formulario cuando se envien 
        form.reset();
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
