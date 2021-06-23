import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
// Modelo
import { NewUser } from  '../models/NewUser';

@Injectable()
    export class PeticionesService{
        public url:string; //defino variable url tipo estring propiedad para la api rest
        constructor(public _http:HttpClient){
            this.url="https://reqres.in/"; //inicializo la url del API Rest del backend
        }
        // devuelve un observable de cualquier typo any 
        // El userId es opcional, se usa para cargar los datos de un solo usuario 
        getUser(userId:any):Observable<any>{
            // return this._http.get(this.url+'api/users/2');carga usuario 2 
            return this._http.get(this.url+'api/users/'+userId); //recupera la informacion de un usuario por medio de la API Rest delñ backend
        }
        // este servicio recibe datos en un jsonString
        addUser(user:NewUser):Observable<any>{
            let params=JSON.stringify(user);
            console.log("Prueba API rest");
            console.log(params); 
            // Fijo las cabeceras de la peticion 
            let headers= new HttpHeaders().set('Contente-Type','application/json');
            return this._http.post(this.url+'api/users',params,{headers:headers}); //le paso el objeto paramas en formato jsonstring y las cabeceras 
        }
    }
