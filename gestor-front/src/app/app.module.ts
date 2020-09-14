import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from '../app/login/login.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestService } from '../services/rest.service';
import { CorrespondenciaPageModule } from '../app/correspondencia/correspondencia.module';
import { RegistroPageModule } from '../app/registro/registro.module';
import { ContactoPageModule } from '../app/contacto/contacto.module';
import { AdminPageModule } from '../app/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            LoginPageModule,
            CorrespondenciaPageModule,
            RegistroPageModule,
            ContactoPageModule,
            AdminPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    RestService,
    AlertController,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
