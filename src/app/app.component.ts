import { Component, OnDestroy, ViewChild  } from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import { NGXLogger } from 'ngx-logger';
import { MenuService } from './menu/menu.service';

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

  constructor(media: ObservableMedia, menuService: MenuService, private logger: NGXLogger) {
    // throw new Error('Hello World, Error Message from scooppages');
    // flex-layout media points
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === Breakpoints.lg) {
         this.loadMobileContent();
      }
      logger.info(change.mqAlias);
      logger.info(change.mediaQuery);
    });
    // media.asObservable().pipe(filter((change: MediaChange) => change.mqAlias === 'xs')).subscribe(() => this.loadMobileContent() );
    // store routes history
    menuService.loadRouting();
    this.logger.info('AppComponent');
  }

  loadMobileContent() { /* .... */ }

  ngOnDestroy() { this.watcher.unsubscribe(); }
}
