import {Component} from '@angular/core';
import {FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import {FirebaseUISignInFailure} from 'firebaseui-angular';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private logger: NGXLogger) {
    this.logger.info('LogInComponent');
  }

  successCallback(ev: FirebaseUISignInSuccessWithAuthResult) {
    this.logger.info('LogInComponent: successCallback() : firebaseui login success');
  }

  errorCallback(ev: FirebaseUISignInFailure) {
    this.logger.error('LogInComponent: errorCallback() :', ev);
  }
}

