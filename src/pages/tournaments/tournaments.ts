import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MyTeamsPage, TeamPage } from '../pages';
import { EliteApi } from '../../share/share';


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteapi: EliteApi,
    private loadingController: LoadingController
            ) { }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamPage, tourney);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'getting tournaments....',
      spinner: 'dots'
    })
    loader.present().then(()=>{
      this.eliteapi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    })
  }

}
