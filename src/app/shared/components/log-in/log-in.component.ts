import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {FirebaseUISignInFailure} from 'firebaseui-angular';
import { FirebaseUiService } from '../../services/firebase-ui.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  user: User;

  constructor(private auth: FirebaseUiService, private fireAuth: AngularFireAuth, private router: Router) {
    this.auth.userObservable.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    // this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  // private firebaseAuthChangeListener(response) {
  //   // if needed, do a redirect in here
  //   if (response) {
  //     console.log('Logged in :)  chinna in');
  //   } else {
  //     console.log('Logged out :( chinna out');
  //   }
  // }

  logout() {
    this.fireAuth.auth.signOut();
    this.user = undefined;
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.router.navigate(['/ad-list']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

}

