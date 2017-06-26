import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamhomePage } from './teamhome';

@NgModule({
  declarations: [
    TeamhomePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamhomePage),
  ],
  exports: [
    TeamhomePage
  ]
})
export class TeamhomePageModule {}
