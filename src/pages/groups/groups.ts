import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {

  constructor(public navCtrl: NavController) {}

  sessions = [
    {
      groupName: 'Roommates',
      groupMembers: ['Zak', 'Matthew'],
      amountDueTotal: '$12.41',
      amountOwedTotal: '$4.30',
      endingDate: '12/4/2016'
    },
    {
      groupName: 'Lorem Ipsum',
      groupMembers: ['Richie', 'Steve', 'David', 'Jerry', 'Chris', 'Matthew'],
      amountDueTotal: '$12.41',
      amountOwedTotal: '$4.30',
      endingDate: '12/4/2016'
    }
  ];

}
