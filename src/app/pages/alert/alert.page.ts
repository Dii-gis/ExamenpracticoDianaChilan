import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage  {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Guarde tu informacion',
      backdropDismiss:false,
      buttons: ['OK','CANCEL'],
      inputs: [
        {
          placeholder: 'Nombres',
        },
        {
          placeholder: 'Apellidos',
        },
        {
          placeholder: 'Descripcion materna',
          type: 'textarea',
        },
        {
          placeholder: 'https://ionicframework.com/',
          type: 'url',
        },
        {
          placeholder: 'Fecha de nacimiento',
          type: 'date',
        },
        {
          type: 'password',
          placeholder: 'Clave',
        },
        {
          placeholder: 'Nickname (max 10 characters)',
          attributes: {
            maxlength: 10,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 80,
        },
      ],
    });

    await alert.present();
  }

  

}
