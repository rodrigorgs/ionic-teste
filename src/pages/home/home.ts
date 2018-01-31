import { AppPreferences } from '@ionic-native/app-preferences';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  count: number = 0;
  constructor(public navCtrl: NavController, public prefs: AppPreferences) {
    prefs.fetch('dict', 'count').then((res) => { this.count = Number(res); });
  }

  increment() {
    this.count++;
    this.prefs.store('dict', 'count', this.count)
  }

}
