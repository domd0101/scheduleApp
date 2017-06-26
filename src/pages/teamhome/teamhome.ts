import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StandingsPage, TeamDetailPage, MyTeamsPage } from '../pages'

@IonicPage()
@Component({
  selector: 'page-teamhome',
  templateUrl: 'teamhome.html',
})
export class TeamhomePage {

  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome(){
    // this.navCtrl.push(MyTeamsPage)
    this.navCtrl.popToRoot()

  }

}
