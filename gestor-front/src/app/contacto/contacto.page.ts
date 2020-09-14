import { Component, OnInit } from '@angular/core';
import {RestService } from '../../services/rest.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  tipoDocumento:string;
  numDocumento:string;
  nombre:string;
  apellido:string;
  celular:string;
  correo:string;

  constructor(public restSevice : RestService) { }

  ngOnInit() {
  }

  crearContacto(){
    console.log(this.tipoDocumento);
    console.log(this.numDocumento);
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.celular);
    console.log(this.correo);

    var data = {
      'tipo_documento':this.tipoDocumento,
      'num_documento':this.numDocumento,
      'nombre': this.nombre,
      'apellido': this.apellido,
      'celular':this.celular,
      'email': this.correo,
     
    };

    this.restSevice.crearContacto(data).then((result) => {
      console.log(result);
    });

  }  
}
