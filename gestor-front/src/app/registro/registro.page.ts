import { Component, OnInit } from '@angular/core';
import {RestService } from '../../services/rest.service'
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  tipoDocumento:string;
  numDocumento:string;
  nombre:string;
  apellido:string;
  celular:string;
  correo:string;
  username:string;
  password:string;

  constructor(public restSevice : RestService,
          private navCtrl: NavController,
          private alertCtrl: AlertController,) { }

  ngOnInit() {
  }

  crearUsuario(){
    console.log(this.tipoDocumento);
    console.log(this.numDocumento);
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.celular);
    console.log(this.correo);
    console.log(this.username);
    console.log(this.password);

    var data = {
        'tipo_documento':this.tipoDocumento,
        'num_documento':this.numDocumento,
        'first_name': this.nombre,
        'last_name': this.apellido,
        'celular':this.celular,
        'email': this.correo,
        'is_active' : 1,
        'group' : [1],
        'username': this.username,
        'password': this.password,
      };
  
      this.restSevice.registro(data).then((result) => {

        console.log(result);
        this.showAlert("Mensaje",result);
      });

  }

  showAlert(encabezado, mensaje) {

    this.alertCtrl.create({
      header: encabezado,
      subHeader: '',
      message: mensaje,
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('/login');
        }
      }]
    }).then(res => {

      res.present();
      
      

    });

  }
  

}
