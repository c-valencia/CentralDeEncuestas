import { Component, OnInit} from '@angular/core';
import {RestService } from '../../services/rest.service'
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'login', 
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:any;
  clave:any;

  response : any

  constructor(
    public restSevice : RestService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
  }

  iniciarSesion() {
    var data = { 'username':this.usuario, 'password':this.clave };
    this.restSevice.login(data)
    .then(data => {
      window.localStorage['token'] = data.key;
      console.log(data);
      this.navCtrl.navigateForward('/admin');
    }, (err) => {
      console.log(err.error.non_field_errors[0]);
      this.showAlert(err.error.non_field_errors[0])
      //this.navCtrl.navigateForward('/login');

    });
  }

  showAlert(mensaje) {

    this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Error en la cuenta',
      message: mensaje,
      buttons: [{
        text: 'OK',
        role: 'error',
        handler: () => {
          this.navCtrl.navigateForward('/home');
        }
      }]
    }).then(res => {

      res.present();
      
      

    });

  }
  
  atras(){

  }

}
