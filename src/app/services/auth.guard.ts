import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {
    
  }


  // metodo que se llama cuando quieren entrar a la ruta
  canActivate(
    next: ActivatedRouteSnapshot, // ruta a la cual quieren entrar
    // // el estado actual
    // debe regresar un observable que resuelva un boolean
    // un promise que resuelva un boolean
    // o un boolean simple
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      state: RouterStateSnapshot): Observable<boolean> {

      // devolver el observable del auth service isAuthenticated$
      // luego asegurarse que la ruta deseada este protegida por este guard
    return this.auth.isAuthenticated$;
  }
  
}
