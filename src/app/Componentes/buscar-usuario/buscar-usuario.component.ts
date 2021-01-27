import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LISTA } from "../../Listas/lista_personas";
import { Usuario } from "../../Clases/usuario";

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  constructor(private Route: ActivatedRoute,) { }

  myUser: Usuario = {
    id:0,
    email:"0",
    pwd:"pwd",
    Nombre:"asd",
    Edad:20
  }


  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario(){
    const id = +this.Route.snapshot.queryParamMap.get('id')
    let user = LISTA.find(user => user.id === id)
    this.myUser = user
  }

}
