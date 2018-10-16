import { Component, OnDestroy, ViewChild  } from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'spng2';
  watcher: Subscription;
  activeMediaQuery = '';

  // @ViewChild('headerSearchBar') headerSearchBar;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === Breakpoints.lg) {
         this.loadMobileContent();
      }
    });
    // media.asObservable().pipe(filter((change: MediaChange) => change.mqAlias === 'xs')).subscribe(() => this.loadMobileContent() );

  }

  loadMobileContent() { /* .... */ }

  ngOnDestroy() { this.watcher.unsubscribe(); }
}
