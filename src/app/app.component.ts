import { Component, OnDestroy, ViewChild  } from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import { RoutingService } from './shared/services/routing.service';
import { NGXLogger } from 'ngx-logger';

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

  constructor(media: ObservableMedia, routingService: RoutingService, private logger: NGXLogger) {
    // -------------------------------flex-layout media points--------------------------------
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === Breakpoints.lg) {
         this.loadMobileContent();
      }
    });
    // media.asObservable().pipe(filter((change: MediaChange) => change.mqAlias === 'xs')).subscribe(() => this.loadMobileContent() );
    // -------------------------------flex-layout media points--------------------------------
    // -------------------------------routes history--------------------------------
    routingService.loadRouting();
    // -------------------------------routes history--------------------------------
    this.logger.info('AppComponent');
  }

  loadMobileContent() { /* .... */ }

  ngOnDestroy() { this.watcher.unsubscribe(); }
}
