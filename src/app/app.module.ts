import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import {HeroDetailComponent} from './hero-detail.component';
// import {HeroesComponent} from './heroes.component';
// import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
// import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routings.module'
import {InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService } from './in-memory-data.service';
// import {HeroSearchComponent} from './hero-search.component';
import {NavbarComponent} from './navbar.component';
import {HeroTourComponent} from './hero-tour.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './users/user.service';
import {UserFormComponent} from './users/user-form.component';
import {FormBuilder } from '@angular/forms';
import{NotFoundComponent} from './not-found.component';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './posts/post.service';
import {SpinnerComponent} from './shared/spinner.component';
import{PaginationComponent} from './shared/pagination.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuth,AngularFireAuthModule} from 'angularfire2/auth';
import {AuthGuard} from './loginMgmt/auth.service';
import {LoginComponent} from './loginMgmt/login.component';
import {SignUpComponent} from './loginMgmt/signup.component';
import {OtherComponent} from './loginMgmt/members.component';
import {EmailComponent} from './loginMgmt/email.component';
import{PostFormComponent} from './posts/post-form.component';
import {TodoListComponent} from './todo/todolist.component';
import {TodoService} from './todo/todo.service';
//import { CallbackPipe } from './todo/todofilter.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyCntGoQGwFIlO4fDEHX9MkFZFy38dmtlx0",
  authDomain: "angular4firebase-28867.firebaseapp.com",
  databaseURL: "https://angular4firebase-28867.firebaseio.com",
  projectId: "angular4firebase-28867",
  storageBucket: "angular4firebase-28867.appspot.com",
  messagingSenderId: "438054991061"
};

@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
  //  HeroesComponent,
    //DashboardComponent,
    // HeroSearchComponent,
    NavbarComponent,
    HeroTourComponent,
    HomeComponent,
    UsersComponent,
    UserFormComponent,
    NotFoundComponent,
    SpinnerComponent,
    PostsComponent,
    PaginationComponent,
    LoginComponent,
    SignUpComponent,
    OtherComponent,
    EmailComponent,
    PostFormComponent,
    TodoListComponent,
    //CallbackPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    BrowserAnimationsModule,

  //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    // HeroService,
    UserService,FormBuilder,UserFormComponent,PostService,SpinnerComponent,AngularFireAuth,AuthGuard,TodoService,TodoListComponent],
  bootstrap: [AppComponent]
})


export class AppModule {

    // ?─────────────────────────────────────?
    // │                                     │
    // │   Update available 4.5.0 → 4.6.1    │
    // │     Run npm i -g npm to update      │
    // │                                     │
    // ?─────────────────────────────────────?
}
