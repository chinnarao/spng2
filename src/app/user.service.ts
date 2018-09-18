import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { logging } from 'protractor';
import { map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

// Building A User Authentication Service with Angular and Firebase : 'stephen fluin'
// https://www.youtube.com/watch?v=mfONkAj4x94

@Injectable({
    providedIn: 'root',
})
export class UserService {
    uid = this.afAuth.authState.pipe(
        map(authState => {
            if (!authState) {
                return null;
            } else {
                return authState.uid;
            }
        })
    );
    isAdmin: Observable<boolean> = this.uid.pipe(
        switchMap(uid => {
            if (!uid) {
                return observableOf(false);
            } else {
                return this.db.object<boolean>('/admin/' + uid).valueChanges();
            }
        })
    );
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {}
    login() {
        // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }
}
