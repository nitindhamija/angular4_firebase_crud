import {Component,OnInit} from '@angular/core';
import {UserService} from './user.service';
import {RouterLink} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import {User} from './user';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Rx';
@Component({
  templateUrl:'./users.component.html',
  providers:[UserService]
})

export class UsersComponent{
//  users:User[];

public users: Observable<any>;
  constructor(private _service:UserService,public afAuth:AngularFireAuth,afDb:AngularFireDatabase,private router:Router){
    // this.usersfb = afDb.list('/messages/', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });
    //var fbusers;


//  return snapshot.val();
  //  console.log('nitin'+snapshot.val());
  // fbusers=snapshot.val();
  //  console.log('abc'+ fbusers);

//});

  //  console.log(this.usersfb);
    this.afAuth.authState.subscribe(authState => {
      if(!authState) {
        this.router.navigateByUrl('/login');
      }
    });

//this.users=fbusers;
  }
  // setUsers(users:User){
  //   console.log(users);
  //
  //   this.users=Array.of(users);
  //       console.log(this.users);
  // }
  ngOnInit(){
  //  this._service.getUsers().subscribe(users=>this.users=users);
  //  console.log(this.usersfb);
  var starCountRef = firebase.database().ref( ).child('/');
//starCountRef.on('value', (snapshot) =>this.setUsers(snapshot.val()));
this.users=this._service.getUsers().valueChanges();
/*starCountRef.on('value', (snapshot) =>{
let items = [];
snapshot.child('/').forEach((snap) => {
  snap.child('/').forEach((dsnap) =>{
 console.log(dsnap.val());
         items.push(
             dsnap.val(),
);
this.users=items;
         return false;
       });
       return false;
     });
  //    console.log(this.users);
    //  self.users=items;
});*/
      console.log(this.users);
  //      this.items.push({ userList: JSON.stringify(this.users)});
  }
  deleteUser(user){
    this._service.deleteUser(user);
  /*  if(confirm("are you sure you want to delete "+user.name + " ?")){
      var index=this.users.indexOf(user);
      this.users.splice(index,1);
      this._service.deleteUser(user.id).subscribe(null,err=>{
        alert('could not delete the user');
        this.users.splice(index,0,user);
      });
    }*/

  }
}
