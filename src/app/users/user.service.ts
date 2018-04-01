import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
@Injectable()
export class UserService{
  private _url="http://jsonplaceholder.typicode.com/users";
 user: Observable<firebase.User>;
users: AngularFireList<User>;
fbuser:AngularFireObject<User>;

private basePath:string='/users';
  constructor(private _http:Http,public afAuth: AngularFireAuth, public af: AngularFireDatabase){
this.user = this.afAuth.authState;

  }
  getUsers(query={}):AngularFireList<User> {
this.users=this.af.list(this.basePath,
  /*{
  query:query
}*/);
return this.users;

  }

  getUser(key:String ):AngularFireObject<User> {
console.log('key -->'+key );
const userPath=`${this.basePath}/${key}`;
this.fbuser=this.af.object(userPath);
return this.fbuser;
  //  return this._http.get(this._url+"?email="+email).map(res=>res.json());
  //   return this._http.get(this._url+"?email="+email).map(function(res){
  //   res=res.json();
  //   console.log(res);
  // });
  //   var starCountRef = firebase.database().ref( ).child('/');
  // //starCountRef.on('value', (snapshot) =>this.setUsers(snapshot.val()));
  // let user = new User();
  // starCountRef.on('value', (snapshot) =>{
  //
  // snapshot.child('/').forEach((snap) => {
  //   snap.child('/').forEach((dsnap) =>{
  //  console.log(dsnap.val());
  //         user=dsnap.val();
  //         if(user.email==email)
  //         break;
  //
  // });
  //
  //          return false;
  //        });
  //        return false;
  //      });
  //
  //
  //
  // return items.map(res=>res.json());
  }
  private handleError(error:any):Promise<any> {
    console.error('an error occurred',error);
    return Promise.reject(error.message || error);
  }

  addUser(user:User){
    //console.log(user);
    this.getUsers();
      var fkey=this.users.push(user);
//console.log(fkey);
//    return this._http.post(this._url,JSON.stringify(user)).map(res=>res.json());
  }
updateUser(user:User){
  //console.log('user'+user);
  this.users=this.getUsers();
  this.users.update(user.$key,user);
  //return this._http.put(this._url+"/"+user.id,JSON.stringify(user)).map(res=>res.json());
}

deleteUser(user:User){
  //return this._http.delete(this._url+"/"+userId).map(res=>res.json());
  this.users=this.getUsers();
  this.users.remove(user.$key);
}

}
