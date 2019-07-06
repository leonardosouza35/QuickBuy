import { Component } from "@angular/core";
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"] 
})
export class LoginComponent {
  public usuario;  
    
  constructor() {
    this.usuario = new Usuario();
  }
  
  entrar() {
    if (this.usuario.email == "leo@teste.com" && this.usuario.senha == "abc123") {      
    }
  }
    
}
