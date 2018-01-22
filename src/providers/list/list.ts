import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  constructor() {
    console.log('Hello ListProvider Provider');
  }

  getItems() {
    let items = [];
    const icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    for (let i = 1; i < 11; i++) {
      items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }

    return items;
  }
}
