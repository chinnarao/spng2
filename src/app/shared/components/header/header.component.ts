import { Component, OnInit, NgZone  } from '@angular/core';
import { User } from '../../models/user';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import 'zone.js/dist/zone-patch-rxjs';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user: User;
  routingService: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private routingSvc: RoutingService, private ngZone: NgZone) {
    this.afAuth.auth.onAuthStateChanged( (user) => {
      if (user) {
        this.user = new User(user);
        user.getIdToken(true).then( (idToken) => {
          this.user.user_idToken = idToken;
          console.log(this.user);
        });
        const route_2 = this.routingSvc.getRouteHistoryUrls_2();
        // warning: fix: Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'
        this.ngZone.run(() => this.router.navigate([route_2]));
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.user = undefined;
    this.isLoggedIn = false;
    const route_1 = this.routingSvc.getRouteHistoryUrls_1();
    this.router.navigate([route_1]);
  }

  ngOnInit() {}
}
