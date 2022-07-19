import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Injectable() // decorador injectable ya que vamos a agregar otros servicios
export class LoginService{
    constructor(private authService: AngularFireAuth){}

    //Metodos
    login(email: string, password: string){
        // El appi de angularfireauth nos va a regresar una promesa
        // una vez que hayamos echo login
        
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
            .then(datos => resolve(datos),
                error => reject(error)
            )
        });
    }
}