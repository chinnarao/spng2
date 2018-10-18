import {Component} from '@angular/core';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {FirebaseUISignInFailure} from 'firebaseui-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor() {}

  successCallback(ev: FirebaseUISignInSuccessWithAuthResult) {}

  errorCallback(ev: FirebaseUISignInFailure) {}
}

