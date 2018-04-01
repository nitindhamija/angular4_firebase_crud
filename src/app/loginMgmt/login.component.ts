import {Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {moveIn} from '../router.animation';

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['../../assets/stylesheets/login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent {
  error:any;
  constructor(public afAuth:AngularFireAuth,afDb:AngularFireDatabase,private router:Router){
    this.afAuth.authState.subscribe(auth=>{
      if(auth)
      this.router.navigateByUrl('/members');
    })
  }

loginFb(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
    (success)=>{
      this.router.navigate(['/members']);
    }).catch(
      (err)=>{
        this.error=err;

      })
    }
    loginGoogle(){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (success)=>{
          this.router.navigate(['/members']);
        }).catch(
          (err)=>{

            this.error=err;

          })
        }

}
