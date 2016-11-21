import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

declare var firebase: any;

@Injectable()
export class AuthService {
  signupUser(user: User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      console.log(error);
    });
  }

signinUser(user:User){
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .catch(function(error) {
        console.log(error);
  });
}

isAuthenticated(): Observable<boolean>{
  const subject = new Subject<boolean>();
  firebase.auth().onAuthStateChanged(function(user){
    subject.next(user != null);
  }); 
  return subject.asObservable();
}

logout(){
  return firebase.auth().signOut();
}

  constructor() { }

}
