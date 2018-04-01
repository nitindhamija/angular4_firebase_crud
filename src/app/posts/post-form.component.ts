import {Component} from '@angular/core';
import{Post} from './post';
import {PostService} from './post.service';
import {Router} from '@angular/router';
@Component({
  selector:'post-form',
  templateUrl:'./post-form.component.html'
})
export class PostFormComponent {
  post:Post;
constructor(private _postService:PostService,private _router:Router){
  this.post=new Post();
}
onSubmit(){
  var result;
  console.log('post '+this.post);
  if(this.post.$key)
  result=this._postService.updatePost(this.post);
  else
  this._postService.addUser(this.post);
    this._router.navigate(['posts']);
}
}
