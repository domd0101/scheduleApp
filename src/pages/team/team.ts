import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamhomePage } from '../pages'
@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  teams = [
    { id:1, name:'HC Elite' },
    { id:2, name:'Team Takeover' },
    { id:3, name:'DC Thunder' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped($event, team){
    this.navCtrl.push(TeamhomePage, team)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }

}
