import {Component} from '@angular/core';

@Component({
  selector:'home',
  template:'<h1>{{welcome}} <i class="fa fa-bandcamp" aria-hidden="true"></i><h1>'
})

export class HomeComponent{
  welcome='Welcome to Angular 4';
}
