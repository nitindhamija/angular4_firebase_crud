import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
 import{SpinnerComponent } from '../shared/spinner.component';
 import{UserService} from '../users/user.service';
 import {PaginationComponent} from '../shared/pagination.component';
 import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

 @Component({

     templateUrl: './posts.component.html',
     providers: [PostService,UserService],
     styles:[`
       .posts li { cursor: default; }
         .posts li:hover { background: #cdc9c9; }
         .childPane{background: #cdc9c9;}
         .list-group-item.active,
         .list-group-item.active:hover,
         .list-group-item.active:focus {
             background-color: #ecf0f1;
             border-color: #ecf0f1;
             color: #2c3e50;
         }
       `],
       animations:[
         trigger('postsAnimation',[
           state('new',style({
             transform:'scale(0)',
        //     transform: 'translateX(0) scale(0)'
           })),
           state('loaded',style({
             transform:'scale(1)',
          //transform: 'translateX(0%) scale(1)'
           })),
           transition('new <=>loaded',animate('300ms ease-in')),
        /*   transition('void => new',[
             style({ transform:'translateX(-100%) scale(1)'}),
             animate('300ms ease-in')]),
             transition('new => void',[
               style({ transform:'translateX(100%) scale(1)'}),
               animate('300ms ease-in')]),
          //  transition('void => loaded',animate('300ms ease-in'))
          transition('void => loaded',[
            style({ transform:'translateX(100%) scale(1)'}),
            animate('300ms ease-in')]),*/

         ])
       ]

 })
 export class PostsComponent implements OnInit {
 	posts = [];
  users = [];
  pagedPosts = [];
   postsLoading = true;
   currentPost;
   commentsLoading=true;
 pageSize = 3;
 postState:string='new';
     constructor(private _postService: PostService,private _userSerice:UserService) {
 	}
select(post){
   this.postState=(this.currentPost===post?'new':'loaded');
   //this.postState='loaded';
  //this.commentsLoading=true;
  this.currentPost=post;
  console.log(post.id);
  //this._postService.getComments(post.id).subscribe(comments=>this.currentPost.comments=comments,null,()=>{this.commentsLoading=false})

}

 	ngOnInit() {//this. postsLoading = true;
 	// 	this._postService.getPosts()
 	// 		.subscribe(posts =>	this.posts = posts,null,()=>{this. postsLoading=false;
    //   });
    this.loadUsers();
    this.loadPosts();
 	}
  private loadUsers(){
    this._userSerice.getUsers().valueChanges().subscribe(users=>this.users=users);
  }
  private loadPosts(filter?){
    this.postsLoading = true;
    this._postService.getPosts(filter).valueChanges().subscribe(posts=>{
      this.posts=posts;
      this.pagedPosts=this.getPostsInPage(1);
this.postsLoading=false;
    });
    //  ,null,()=>{this.postsLoading=false;});
  }
  reloadPosts(filter){
    console.log(filter);
          this.currentPost = null;
          this.loadPosts(filter);
      }
      onPageChanged(page) {
          this.pagedPosts = this.getPostsInPage(page);
  	}
      private getPostsInPage(page){
        var result = [];
		var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
console.log('endIndex'+endIndex);
        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);

        return result;
}
 }
