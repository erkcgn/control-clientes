import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private loginService: LoginService,
    private router: Router
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
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
