// import { Component,OnInit } from '@angular/core';
// import {Hero} from './Hero.js';
// import {HeroDetailComponent} from './hero-detail.component';
// import { HeroService } from './hero.service';
// import {Router} from '@angular/router';
// // const HEROES: Hero[] = [
// //  { id: 11, name: 'Mr. Nice' },
// //  { id: 12, name: 'Narco' },
// //  { id: 13, name: 'Bombasto' },
// //  { id: 14, name: 'Celeritas' },
// //  { id: 15, name: 'Magneta' },
// //  { id: 16, name: 'RubberMan' },
// //  { id: 17, name: 'Dynama' },
// //  { id: 18, name: 'Dr IQ' },
// //  { id: 19, name: 'Magma' },
// //  { id: 20, name: 'Tornado' }
// // ];
//
// @Component({
//   selector: 'my-heroes',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
//   ,
//   providers: []
// })
// export class HeroesComponent implements OnInit {
//   title = 'Tour of Heroes';
// selectedHero:Hero;
// // hero:Hero={
// //   id:1,
// //   name:'Windstorm'
// // }
// constructor(private heroService: HeroService,
// private router:Router) {
// }
//
// heroes: Hero[];
// getHeroes(): void {
//     this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
// }
// //heroes=HEROES;
// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }
//
// ngOnInit(): void {
//   this.getHeroes();
//  }
//
// gotoDetail():void {
//   this.router.navigate(['detail',this.selectedHero.id]);
// }
// add(name: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   this.heroService.create(name)
//     .then(hero => {
//       this.heroes.push(hero);
//       this.selectedHero = null;
//     });
// }
// delete(hero: Hero): void {
//   this.heroService
//       .delete(hero.id)
//       .then(() => {
//         this.heroes = this.heroes.filter(h => h !== hero);
//         if (this.selectedHero === hero) { this.selectedHero = null; }
//       });
// }
//
//
// }
