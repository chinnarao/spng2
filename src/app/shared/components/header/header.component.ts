import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user: User;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.auth.onAuthStateChanged( (user) => {
      if (user) {
        this.user = new User(user);
        user.getIdToken(true).then( (idToken) => {
          this.user.user_idToken = idToken;
          console.log(this.user);
        });
        router.navigate(['/']);
        console.log('navigate to:', 'home' );
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
    this.router.navigate(['/']);
    console.log('Sign out success, navigate to:', 'home' );
  }

  ngOnInit() {}
}
