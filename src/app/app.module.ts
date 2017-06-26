import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { MyTeamsPage } from '../pages/pages';
import { GamePage } from '../pages/pages';
import { TeamDetailPage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';
import { TeamPage } from '../pages/pages';
import { StandingsPage } from '../pages/pages';
import { TeamhomePage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamDetailPage,
    TournamentsPage,
    TeamPage,
    StandingsPage,
    TeamhomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamDetailPage,
    TournamentsPage,
    TeamPage,
    StandingsPage,
    TeamhomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
