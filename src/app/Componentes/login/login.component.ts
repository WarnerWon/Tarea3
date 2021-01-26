import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../Clases/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUser:Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
