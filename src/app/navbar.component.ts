import {Component} from '@angular/core';
import {Router} from '@angular/router';
//import {AppComponent} from './app.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
@Component({
  selector:'navbar',
  templateUrl:'./navbar.component.html'
})
export class NavbarComponent {
   //appComponent:AppComponent;
   user: Observable<firebase.User>;
    items: AngularFireList<any>;
    msgVal: string = '';

   constructor(private _router:Router,public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
     this.items = af.list('/messages',/* {
       query: {
         limitToLast: 50
       }
     }*/);

     this.user = this.afAuth.authState;

   }
isCurrentRoute(route){
      //  var instruction = this._router.config.;
      //   return this._router.isRouteActive(instruction);
      // console.log(this._router.url.substr(1));
      // console.log(route[0]);
      // console.log(this._router.url===route[0]);
      return this._router.url.substr(1)===route[0];



}



 login() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
}
}
