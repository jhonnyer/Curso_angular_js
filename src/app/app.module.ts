import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// routing Angular 
import  {routing,AppRoutingProviders} from './app.routing';

// Componentes 
import {VideojuegoComponent} from './videojuego/videojuego.component'; 
import {ZapatillasComponent} from './zapatillas/zapatillas.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ExternoComponent } from './externo/externo.component';

// Pipe personalizado Calculadora
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent //importa pipe personalizado calculadora 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing, //Se carga aqui porque es un modulo
    HttpClientModule
  ],
  providers: [
    AppRoutingProviders//Se carga el servicio del router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
