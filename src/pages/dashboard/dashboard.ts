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
  name = "Eric";
  sessions = [
    {
      groupName: 'Roommates',
      groupMembers: ['Zak', 'Matthew'],
      amountDueTotal: '$12.41',
      endingDate: '12/4/2016'
    },
    {
      groupName: 'Lorem Ipsum',
      groupMembers: ['Richie', 'Steve', 'David', 'Jerry', 'Chris', 'Matthew'],
      amountDueTotal: '$12.41',
      endingDate: '12/4/2016'
    }
  ];
  timeGreeting = this.setTimeGreeting();
  sessionString = this.setSessionString();

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

  setTimeGreeting() {
    let time: number = new Date().getHours(), result: string = "";
    if (time > 19) result = "Good Evening";
    else if (time > 12) result = "Good Afternoon";
    else result = "Good Morning";

    result += ", " + this.name;
    return result;
  }

  setSessionString()
  {
    let numSessions = this.sessions.length;
    return numSessions + " sessions active from 2 total groups";
  }

}