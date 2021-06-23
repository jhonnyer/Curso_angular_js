// importar modulos del router de angular 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes 
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// Array configruacion de las rutas 
const appRoutes:Routes=[
    {path:'', component:HomeComponent}, //Componente inicio de la aplicación
    {path:'home',component:HomeComponent},
    {path:'zapatillas',component:ZapatillasComponent},
    {path:'videojuego',component:VideojuegoComponent},
    {path:'cursos',component:CursosComponent},
    {path:'cursos/:nombre',component:CursosComponent},//Pasar un parametro en la ruta url del routing
    {path:'cursos/:nombre/:id',component:CursosComponent},//El parametro apellido es opcional
    {path:'externo', component:ExternoComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'**', component:HomeComponent}, //Ruta error 404 se ejecuta en este caso el componente homeComponent si la ruta no se encuentra
]

// exportar el modulo del router 
export const AppRoutingProviders:any[]=[]; //se exporta el servicio del router
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes); //Se exporta el modulo del router 
