import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InstantSession page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-instant-session',
  templateUrl: 'instant-session.html'
})
export class InstantSessionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InstantSessionPage Page');
  }

}
