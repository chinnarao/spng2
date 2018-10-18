// import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';
// declare const require;
// const bowser = require('bowser');

import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  public static getBaseUrl() {
    if (window.location.host.includes('localhost')) {
      return 'http://localhost:4200';
    }
    return 'https://www.scooppages.com';
  }

  // not working
  // public static isDefined<T>(value: T | undefined | null): value is T {
  //   return <T>value !== undefined && <T>value !== null;
  // }

//   handleSignupErrors(errorCode: string) {
//     switch (errorCode) {
//       case 'auth/email-already-in-use':
//         // Thrown if there already exists an account with the given email address.
//         this.snackBar.open('Sorry this email address is already in use! Please try again.', 'Goto Login?', {
//           duration: 6000,
//         });
//         this.resetForm();
//         break;
//       case 'auth/invalid-email':
//         // Thrown if the email address is not valid.
//         this.snackBar.open('Sorry this is not a valid email address!', undefined, {
//           duration: 6000,
//         });
//         break;
//       case 'auth/operation-not-allowed':
//         // Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
//         break;
//       case 'auth/weak-password':
//         // Thrown if the password is not strong enough
//         break;
//       default:
//       // unknown error has occured
//     }
//   }
}
