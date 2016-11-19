import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-group-view',
  templateUrl: 'group-view.html'
})
export class GroupViewPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GroupViewPage Page');
  }

}
