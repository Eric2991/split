import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-session-view',
  templateUrl: 'session-view.html'
})
export class SessionViewPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SessionViewPage Page');
  }

}
