import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./Componentes/login/login.component";
import { BuscarUsuarioComponent } from "./Componentes/buscar-usuario/buscar-usuario.component";
import { EdadGuard } from './Guardias/edad.guard';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"buscarUsuario/:id", component: BuscarUsuarioComponent, canActivate: [EdadGuard]},
  {path:"**"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
