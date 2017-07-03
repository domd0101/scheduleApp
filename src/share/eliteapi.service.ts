import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class EliteApi {

  public baseUrl = 'https://scheduleapp-3e2b7.firebaseio.com';
  currentTourney : any = {}

  constructor(private http: Http){

  }

  getTournaments(){
    return new Promise(resolve =>{
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res.json()))
    })
  }

  getTournamentsData(tourneyId) : Observable<any> {
      return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map((response: Response)=>{
          this.currentTourney = response.json()
          return this.currentTourney
        })
  }

  getCurrentTourney(){
    return this.currentTourney
  }

}
// ionViewDidLoad
