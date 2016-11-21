import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController) {}

  Dashboard(): void {
    this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Logging in...',
      spinner: 'crescent'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();

      setTimeout(() => {
        this.Dashboard();
      }, 200);
    }, 2000);
  }

}
