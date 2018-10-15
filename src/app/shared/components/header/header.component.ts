import { Component, OnInit } from '@angular/core';
import { FirebaseUiService } from '../../services/firebase-ui.service';
import { User } from '../../models/user';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  isLoggedIn = false;

  constructor(private auth: FirebaseUiService, private fireAuth: AngularFireAuth) {
    this.auth.userObservable.subscribe(this.firebaseAuthChangeListener);
  }

  private firebaseAuthChangeListener(user: User) {
    this.user = user;
      if (this.user && this.user.id) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
  }

  signOut() {
    this.fireAuth.auth.signOut();
    this.user = undefined;
    this.isLoggedIn = true;
  }

  ngOnInit() {}
}
