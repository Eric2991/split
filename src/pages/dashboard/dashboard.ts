import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// Import Pages
import { GroupViewPage } from '../group-view/group-view';
import { SessionViewPage } from '../session-view/session-view';
import { QuickAddPage } from '../quick-add/quick-add'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  name: string = "Eric";
  sessions = [
    {
      sessionId: 6182,
      groupName: 'Roommates',
      groupMembers: ['Zak', 'Matthew'],
      amountDueTotal: '$12.41',
      amountOwedTotal: '$4.30',
      endingDate: '12/4/2016'
    },
    {
      sessionId: 6183,
      groupName: 'Lorem Ipsum',
      groupMembers: ['Richie', 'Steve', 'David', 'Jerry', 'Chris', 'Matthew'],
      amountDueTotal: '$12.41',
      amountOwedTotal: '$4.30',
      endingDate: '12/4/2016'
    }
  ];
  timeGreeting: string = this.setTimeGreeting();
  sessionString: string = this.setSessionString();

  constructor(public navCtrl: NavController,
              private modalController: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello DashboardPage Page');
  }

  goToGroup(groupId: string): void {
    this.navCtrl.push(GroupViewPage, { groupId: groupId });
  }

  presentModal(sessionId: number): void {
    let modal = this.modalController.create(QuickAddPage, {"displayParams": sessionId});
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