import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service'
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-correspondencia',
  templateUrl: './correspondencia.page.html',
  styleUrls: ['./correspondencia.page.scss'],
})
export class CorrespondenciaPage implements OnInit {
  noEncuesta:string;
  contacto:string;
  enlace:string;
  observacion:string;
  canal:string;
  contactos:any;
  constructor(
    public restSevice : RestService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,) { }

  ngOnInit() {
    this.consultarContactos(); 
    console.log(window.localStorage['token']);
  }

  enviar(){
    console.log(this.noEncuesta);
    console.log(this.contacto);
    console.log(this.enlace);
    console.log(this.observacion);
    console.log(this.canal);

    var data = {
      'id_encuesta': this.noEncuesta,
      'id_contacto': this.contacto,
      'enlace': this.enlace,
      'observacion': this.observacion,
      'canal' : this.canal,
    };

    var contacto = this.obtenerInfoContac();
    var dataCorreo = { 
      "mail":contacto.email,
      "enlace":this.enlace
    }

    console.log(dataCorreo);
    this.restSevice.crearEncuesta(data).then((result) => {
      console.log(result);
    });

    if(this.canal == "Correo"){
      this.restSevice.enviarEmail(dataCorreo).then((result) => {
        console.log(result)
        this.showAlert(result.message);
        
      });
    }else{
      var mensaje:string = "Cordial Saludo Asociado, no puedes ayudar con la cuenta que este en el enlace: "+this.enlace;
      window.open('https://api.whatsapp.com/send?phone=57'+contacto.celular+'&text='+mensaje);

    }
   

    


    
    


  }

  consultarContactos() {
    this.restSevice.getContactos()
    .then(data => {
      this.contactos = data;
      console.log(this.contactos);
    });
  }

  obtenerInfoContac(){
    var contac:any;
    console.log(this.contactos);
    for (let index = 0; index < this.contactos.length; index++) {
      if(this.contactos[index].num_documento == this.contacto){
        console.log("entre y el contacto es: "+this.contactos[index]);
        contac = this.contactos[index];
      }
          
    }
    return contac;
  }
    
  showAlert(mensaje) {

    this.alertCtrl.create({
      header: 'Mensaje',
      subHeader: 'Exitoso',
      message: mensaje,
      buttons: [{
        text: 'OK',
        role: 'success',
        handler: () => {
          this.navCtrl.navigateForward('/admin');
        }
      }]
    }).then(res => {

      res.present();
      
      

    });

  }
  




}
