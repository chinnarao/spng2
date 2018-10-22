import { Component, OnInit, NgZone  } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import 'zone.js/dist/zone-patch-rxjs';
import { NGXLogger } from 'ngx-logger';
import { User } from 'src/app/_models/user';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user: User;
  routingService: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private menuService: MenuService, private ngZone: NgZone,
    private logger: NGXLogger) {
    this.afAuth.auth.onAuthStateChanged( (user) => {
      if (user) {
        this.user = new User(user);
        user.getIdToken(true).then( (idToken) => {
          this.user.user_idToken = idToken;
          this.logger.info(this.user);
        });
        const route_2 = this.menuService.getRouteHistoryUrls_2();
        // warning: fix: Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'
        this.ngZone.run(() => this.router.navigate([route_2]));
        this.logger.info('router: HeaderComponent.constructor(): redirected from: ', this.router.url, ', To:', route_2, 'success');
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.logger.info('HeaderComponent');
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.user = undefined;
    this.isLoggedIn = false;
    const route_1 = this.menuService.getRouteHistoryUrls_1();
    this.router.navigate([route_1]);
    this.logger.info('HeaderComponent firebase signed out success');
    this.logger.info('router: signOut() : redirected from: ', this.router.url, ', To:', route_1, 'success');
  }

  ngOnInit() {}
}
