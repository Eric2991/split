import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
