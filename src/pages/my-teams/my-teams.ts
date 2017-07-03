import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamhomePage } from '../pages';
import { EliteApi } from '../../share/share';


@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  favorites = [
    {
      team: {id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: "89e13aa2-ba6d-4f55-9cc2-61eba6172c63",
      tournamentName: "March Madness Tournament"
    },
    {
      team: {id: 802, name: 'HC Elite', coach: 'Michelotti'},
      tournamentId: "89e13aa2-ba6d-4f55-9cc2-61eba6172c63",
      tournamentName: "March Madness Tournament"
    }
  ]

  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private loadingController: LoadingController,
    private eliteApi: EliteApi
  ) {
  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting Data..',
      dismissOnPageChange: true
    })
    loader.present()
    this.eliteApi.getTournamentsData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamhomePage, favorite.team))
  }

}
