import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { BuscarUsuarioComponent } from './Componentes/buscar-usuario/buscar-usuario.component';
import { ListaUsuariosComponent } from './Componentes/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscarUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
