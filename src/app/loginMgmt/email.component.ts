import {Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {moveIn,fallIn} from '../router.animation';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls:['../../assets/stylesheets/login.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})


export class EmailComponent{
  state: string = '';
  error: any;
email:string;
password:string;
  constructor(public afAuth:AngularFireAuth,afDb:AngularFireDatabase,private router:Router){

  }

  onSubmit(formData) {
   if(formData.valid) {
     console.log(formData.value);
     this.afAuth.auth.signInWithEmailAndPassword(
       formData.value.email,
       formData.value.password
    ).then(
       (success) => {
       console.log(success);
       this.router.navigate(['/members']);
     }).catch(
       (err) => {
       console.log(err);
       this.error = err;
     })
   }
}
}
