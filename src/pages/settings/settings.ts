import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  name: string = "Eric Yamane";

  constructor(public navCtrl: NavController,
              public modalController: ModalController) {}

  presentModal(): void {
    let modal = this.modalController.create(AccountPage);
    modal.present();
  }
}
