import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// Import Pages
import { GroupViewPage } from '../group-view/group-view';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController,
              private modalController: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello DashboardPage Page');
  }

  goToGroup(groupId: string): void {
    this.navCtrl.push(GroupViewPage, { groupId: groupId });
  }

  presentModal(): void {
    let modal = this.modalController.create(SettingsPage);
    modal.present();
  }

}
