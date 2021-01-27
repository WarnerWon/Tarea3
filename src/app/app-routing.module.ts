import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./Componentes/login/login.component";
import { BuscarUsuarioComponent } from "./Componentes/buscar-usuario/buscar-usuario.component";
import { ListaUsuariosComponent } from "./Componentes/lista-usuarios/lista-usuarios.component";
import { EdadGuard } from './Guardias/edad.guard';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"usuarios", component: ListaUsuariosComponent, canActivate: [EdadGuard]},
  {path:"buscarUsuario", component: BuscarUsuarioComponent, canActivate: [EdadGuard]},
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:"**", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
