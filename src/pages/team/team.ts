import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import { TeamhomePage } from '../pages'
import { EliteApi } from '../../share/share'
import _ from 'lodash'

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  private allTeams: any
  private allTeamDivisions: any
  teams = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController
  ) { }

  itemTapped($event, team){
    this.navCtrl.push(TeamhomePage, team)
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data

    let loader = this.loadingController.create({
      content: 'Getting Data...'
    })
    loader.present().then(()=>{
      this.eliteApi.getTournamentsData(selectedTourney.id).subscribe(data =>{
        this.allTeams = data.teams
        this.allTeamDivisions =
          _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName','divisionTeams'],item))
          .value()

        this.teams = this.allTeamDivisions

        loader.dismiss()
    })

    })

  }

}
