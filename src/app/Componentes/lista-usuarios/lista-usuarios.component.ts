import { Component, OnInit } from '@angular/core';
import { LISTA } from "../../Listas/lista_personas";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private router:Router) { }

  myUsuarios = LISTA
  ngOnInit(): void {
    
  }

  goBuscar(id){
    let newUser = LISTA.find(user => user.id === id)
    this.router.navigate(['/buscarUsuario'], { queryParams: { id: newUser.id } });
  }
  
}
