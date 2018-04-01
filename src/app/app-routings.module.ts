import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
import {NavbarComponent  } from './navbar.component';
// import {HeroTourComponent} from './hero-tour.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {NotFoundComponent} from './not-found.component';
import {PostsComponent} from './posts/posts.component';
import{LoginComponent} from './loginMgmt/login.component';
import { OtherComponent } from './loginMgmt/members.component';
import { AuthGuard } from './loginMgmt/auth.service';
import { SignUpComponent } from './loginMgmt/signup.component';
import { EmailComponent } from './loginMgmt/email.component';
import {PostFormComponent} from './posts/post-form.component';
import {TodoListComponent} from './todo/todolist.component';
const routes: Routes = [


  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent },
  { path: 'home',     component:HomeComponent },
  // { path: 'heroes-tour',    component: HeroTourComponent },
  { path: 'users',    component: UsersComponent },
    { path: 'todos',    component: TodoListComponent},
  { path: 'posts',    component: PostsComponent },
  { path: 'posts/new',    component: PostFormComponent },
    { path: 'users/new',  component: UserFormComponent,canDeactivate: [UserFormComponent]},
  { path: 'user/:key',  component: UserFormComponent,canDeactivate: [UserFormComponent]},
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: OtherComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
