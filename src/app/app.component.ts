import { Component } from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spng2';
  constructor(private media: ObservableMedia, public user: UserService) {
    media.asObservable().subscribe((media1: MediaChange) => {
      console.log('media revati: ' + media1.mqAlias);
    });
  }
}
