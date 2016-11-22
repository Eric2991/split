import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import {ReactiveFormsModule, FormArray, FormBuilder} from '@angular/forms'

@Component({
  selector: 'page-quick-add',
  templateUrl: 'quick-add.html'
})
export class QuickAddPage {
  envVars: FormArray;
  sessionList: string;

  constructor(public viewCtrl: ViewController,
              public params: NavParams,
              private fb: FormBuilder) {
                this.envVars = fb.array([fb.group({
                  name: '',
                  price: ''
                })]);
              }

  session = {
    sessionId: 6182,
    groupName: 'Roommates',
    groupMembers: ['Zak', 'Matthew'],
    amountDueTotal: '$12.41',
    amountOwedTotal: '$4.30',
    endingDate: '12/4/2016',
    lists: [
      {
        name: "Groceries",
        items: [
          {
            name: "Carrots",
            price: 4.50
          }
        ]
      }
    ]
  };

  display = this.setDisplay();

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addNewItem() {
    this.envVars.push(this.fb.group({
      name: '',
      price: ''
    }));
  }

  setDisplay() {
    return this.session.groupName;
  }

}
