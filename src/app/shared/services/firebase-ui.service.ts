import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUiService {

  userObj: AngularFireObject<User>;
  user: User;

  private userSource = new BehaviorSubject({});
  userObservable = this.userSource.asObservable();

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(
      authData => this.getUser(authData)
    );
  }

  getUser(authData: any): AngularFireObject<User> {
    if (!authData || !authData.uid) {
        return;
    }
    this.userObj = this.db.object(`users/${authData.uid}`);
    this.userObj.valueChanges().subscribe(
      (user: User) => {
        this.setUser(user, authData);
      }
    );
  }

  getUserNameById(userId: string): String {
    const userObj = this.db.object(`users/${userId}`);
    let user;
    userObj.valueChanges().subscribe(
      (user: User) => {
        user = user;
      }
    );
    return user.name;
  }

  updateUser(user: User): void {
    this.userSource.next(user);
    this.db.object(`users/${user.id}`).update(user);
  }

  setUser(user: User, authData: any) {
    if (!user) {
      this.createUser(authData);
    } else {
      this.user = user;
    }
    this.updateUser(this.user);
    this.updateUser(this.user);
  }

  createUser(authData: any) {
    const user = new User(authData);
    this.userObj.set(user);
    this.user = user;
  }
}
