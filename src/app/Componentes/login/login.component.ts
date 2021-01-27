import { Component, OnInit, Input } from '@angular/core';
import { LISTA } from "../../Listas/lista_personas";
import { Router } from '@angular/router';
import { Usuario } from "../../Clases/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String
  pwd: String

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    let user = LISTA.find(user => user.email === this.email && user.pwd === this.pwd)
    this.router.navigate(['/usuarios'], { queryParams: { id: user.id } });

  }

}
