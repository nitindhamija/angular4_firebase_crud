import {Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {moveIn,fallIn,moveInLeft} from '../router.animation';


@Component({
  selector: 'app-other',
  templateUrl: './members.component.html',
  styleUrls:['../../assets/stylesheets/login.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class OtherComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public afAuth:AngularFireAuth,afDb:AngularFireDatabase,private router:Router){

    this.afAuth.authState.subscribe(authState => {
      if(authState) {
        this.name = authState.email;
      }
    });

  }

  logout() {
     this.afAuth.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }

}
