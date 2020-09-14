import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
apiUrl = 'http://localhost:8000/';
loginService = 'rest-auth/login/';
apiAlumnos = 'gestorencuestas';
apiContactos = 'contacto';
apiEncuestas= 'encuesta/';
apiCorrespondencia = 'envio/';
apiUsuarios = 'user/'
apiCrerContacto = 'contacto/';

  constructor(public http: HttpClient) { 

  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+this.loginService, data)
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
      });
  }

  crearEncuesta(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiEncuestas, data, {headers: new HttpHeaders().set('Authorization', 'token '+window.localStorage['token'])})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getContactos() {
    console.log("el token es: "+window.localStorage['token']);
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+this.apiContactos, {headers: new HttpHeaders().set('Authorization', 'token '+window.localStorage['token'])})
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        });
      });
    }

    enviarEmail(data){
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + this.apiCorrespondencia, data, {headers: new HttpHeaders().set('Authorization', 'token '+window.localStorage['token'])})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
    }

    registro(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err.error);
        });
      });
    }

    crearContacto(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + this.apiCrerContacto, data, {headers: new HttpHeaders().set('Authorization', 'token '+window.localStorage['token'])})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err.error);
        });
      });
    }
  
     

}

