import { Component, OnInit } from '@angular/core';
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
  };

  constructor(private clientesServicio: ClienteServicio) {}

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

}
