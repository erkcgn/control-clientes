import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes!: Cliente[];
  //propiedad cliente que asociamos en el form, con esto asignamos un nvo obj de tipo cliente
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild("clienteForm", {static: false}) clienteForm!: NgForm;

  constructor(private clientesServicio: ClienteServicio,
              private flashMessages: FlashMessagesService
             
  ) {}

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clientes =>{
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente =>{
        saldoTotal += Number(cliente.saldo);
      })
    }
    return saldoTotal;
  }

  agregar(f:NgForm){
    console.log(f.value);
    if(!f.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(f.value);
      this.clienteForm.resetForm();
      // this.cerrarModal();
    }
  }

}
