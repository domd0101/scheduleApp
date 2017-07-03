import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamhomePage } from '../pages'
import { EliteApi } from '../../share/share'

import _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi
  ) {
  }

  ionViewDidLoad() {
    this.game = this.navParams.data
    console.log(this.game)
  }

  teamTapped(teamId){
    console.log(teamId)
    console.log('clickedfuwhfojhrw ------=====')
    let tourneyData = this.eliteApi.getCurrentTourney()
    let team = tourneyData.teams.find(t => t.id === teamId)
    this.navCtrl.push(TeamhomePage,team)
  }

}
