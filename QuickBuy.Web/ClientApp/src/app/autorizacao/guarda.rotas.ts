import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
  providedIn:'root'
})
export class GuardaRotas implements CanActivate {
    
    constructor(private router: Router, private usuarioServico: UsuarioServico) {
      
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //this.usuarioServico
    var autenticado = sessionStorage.getItem("usuario-autenticado");
    if (autenticado == "1") {
      return true;
    }    
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
    return false;
    }
    
}
