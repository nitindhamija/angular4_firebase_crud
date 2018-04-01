 import {Injectable} from '@angular/core';
 import {Http} from '@angular/http';
 import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
 import { AngularFireAuth } from 'angularfire2/auth';

 import * as firebase from 'firebase/app';
 import {Observable} from 'rxjs/Observable';
import{Post} from './post';

 @Injectable()
 export class PostService {
 	private _url = "http://jsonplaceholder.typicode.com/posts";
  post: Observable<any>;
 posts: AngularFireList<Post>;
 //fbuser:FirebaseObjectObservable<User>;

 private basePath:string='/posts';
   constructor(private _http:Http,public afAuth: AngularFireAuth, public af: AngularFireDatabase){
 //this.post = this.afAuth.authState;

   }
   getPosts(query={}):AngularFireList<Post> {
 this.posts=this.af.list(this.basePath,
   /*{
   query:query
 }*/);
 return this.posts;

   }


 /*	getPosts(filter?) {
    var url=this._url;
    if(filter && filter.userId)
    url+="?userId="+filter.userId;
console.log(url);
 		return this._http.get(url)
 			.map(res => res.json());
 	}*/
  getComments(postId){
    return this._http.get(this._url+"/"+postId+"/comments",).map(res=>res.json());

  }

  addUser(post){
    //console.log(user);
    this.getPosts();
      var fkey=this.posts.push(post);
//console.log(fkey);
//    return this._http.post(this._url,JSON.stringify(user)).map(res=>res.json());
  }
updatePost(post:Post){
  //console.log('user'+user);
  this.posts=this.getPosts();
  this.posts.update(post.$key,post);
  //return this._http.put(this._url+"/"+user.id,JSON.stringify(user)).map(res=>res.json());
}
 }
