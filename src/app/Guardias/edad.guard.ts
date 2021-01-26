import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LISTA } from "../Listas/lista_personas";

@Injectable({
  providedIn: 'root'
})
export class EdadGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const id = +route.queryParamMap.get('id')
    let user = LISTA.find(user => user.id === id)
    if (user.Edad >=18){
      return true
    }
    return false;
  }
  
}
