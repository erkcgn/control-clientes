import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ConfiguracionServicio } from "../servicios/configuracion.service";
import { map } from "rxjs/operators";


@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private router: Router,
        private configuracionServicio: ConfiguracionServicio
    ){}
    
    canActivate(): Observable<boolean>{
        //vamos a regresar verdadero en caso de que se permitar
        //mostrar el form de registro, sino redirigir a login
        return this.configuracionServicio.getConfiguracion().pipe(
            map( configuracion => {
                if(configuracion.permitirRegistro){
                    return true;
                }
                else{
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }
}