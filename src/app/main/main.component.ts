import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {FirebaseUISignInFailure} from 'firebaseui-angular';

@Component({
  selector: 'fbui-ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private angularFireAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

}
