import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
 
  //nuestro usuario esta logueado?
  isLoggedIn!: boolean;
  loggedInUser!: string;
  //variable
  permitirRegistro!: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) { }

  ngOnInit() {
    //inicializamos nuestro login user
    this.loginService.getAuth().subscribe(auth => {
      if(auth?.email){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });

    this.configuracionServicio.getConfiguracion()
    .subscribe( configuracion => {
      //cargamos el valor que tenemos en la bbdd en la propiedad permitir registro
      // por medio de configuracion.permitirRegistro le asignamos el valor
      //que tengamos en nuestra bbdd a nuestra variable.

      this.permitirRegistro = configuracion.permitirRegistro;
    })
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
