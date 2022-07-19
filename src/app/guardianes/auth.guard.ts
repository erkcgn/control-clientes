//vamos a revisar si el uss esta log y sino lo vamos a redirigir
//a la pag de login en los componentes que establezcamos
//en los archivos de rutas q vamos a modificar

import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ){}

    canActivate(): Observable<boolean>{
        return this.afAuth.authState.pipe(
            map( auth => {
                if(!auth){
                    this.router.navigate(['/login']);
                    return false;
                }
                else{
                    return true;
                }
            })
        )
    }
    
}