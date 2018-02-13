import { HttpClient } from '@angular/common/http';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  count: number = 0;
  list: any;

  constructor(public navCtrl: NavController,
      public prefs: AppPreferences,
      public platform: Platform,
      public http: HttpClient) {
    this.platform.ready().then(() => this.loadCounter());
  }

  requestNumbers() {
    const url = 'https://next.json-generator.com/api/json/get/N1Arzfi4N';
    this.http.get(url).toPromise()
      .then(x => this.list = x);
  }

  loadCounter() {
    this.prefs.fetch(null, 'count')
      .then((res) => { this.count = Number(res); })
  }

  increment() {
    this.count++;
    this.prefs.store(null, 'count', this.count)
  }  
}
