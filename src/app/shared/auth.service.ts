import { User } from './user.interface';
import { Injectable } from '@angular/core';

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

isAuthenticated(){
    var user = firebase.auth().currentUser;
    return user != null;
}

logout(){
  return firebase.auth().signOut();
}

  constructor() { }

}
