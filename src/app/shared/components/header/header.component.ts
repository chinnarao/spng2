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
  // constructor(private afAuth: AngularFireAuth, public router: Router) {
  //   // this.auth.userObservable.subscribe(this.firebaseAuthChangeListener);
  //   this.afAuth.auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       this.user = new User(user);
  //       user.getIdToken(true).then( (idToken) => {
  //         this.user.user_idToken = idToken;
  //         console.log(this.user);
  //       });
  //       router.navigate(['/']);
  //       this.isLoggedIn = true;
  //       console.log('chinna: ' + this.isLoggedIn);
  //     } else {
  //       this.isLoggedIn = false;
  //     }
  //   });
  // }

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    // this.auth.userObservable.subscribe(this.firebaseAuthChangeListener);
    this.afAuth.auth.onAuthStateChanged( (user) => {
      if (user) {
        this.user = new User(user);
        user.getIdToken(true).then( (idToken) => {
          this.user.user_idToken = idToken;
          console.log(this.user);
        });
        router.navigate(['/']);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  // private firebaseAuthChangeListener(user: User) {
  //   this.user = user;
  //     if (this.user && this.user.id) {
  //       this.isLoggedIn = true;
  //     } else {
  //       this.isLoggedIn = false;
  //     }
  // }

  signOut() {
    this.afAuth.auth.signOut();
    this.user = undefined;
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {}
}
