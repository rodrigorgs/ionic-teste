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

  constructor(public navCtrl: NavController,
      public prefs: AppPreferences,
      public platform: Platform) {
    this.platform.ready().then(() => this.loadCounter());
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
