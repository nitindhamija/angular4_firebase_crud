
import {Component} from '@angular/core';


@Component({
  selector:'app-root',
  template:`
<navbar></navbar>
<div class="container">
<router-outlet></router-outlet>
</div>
`
})
export class AppComponent{
title='Tour of Heroes';

}
