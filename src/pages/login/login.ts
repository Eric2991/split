import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {

  }

  Dashboard(): void {
    this.navCtrl.setRoot(DashboardPage, {}, {animate: true, direction: 'forward'});
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
