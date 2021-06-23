import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario:ContactoUsuario; //crear array usuario relacionado con el modelo ContactoUsuario. Ver modelo 
  public show_data:any; //creo variable show_data para almacenar temporalmente datos obtenidos en el formulario
  constructor() {
    this.usuario=new ContactoUsuario('','','',''); //inicializar objeto usuario con datos en vacio
   }

  ngOnInit(){
  }

  onSubmit(form:any){
    console.log("Datos enviados por el formulario");
    console.log(this.usuario);
    this.show_data=this.usuario;
    console.log("Array show_data con los datos del formulario");
    console.log(this.show_data);
    // form.reset(); //borrar datos del formulario, vaciarlo 
    // console.log("Evento submit lanzado");
    // console.log(this.usuario);
  }
}
