import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Stats} from './components/stats/stats';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})

@RouteConfig([
  { path: '/', component: Stats, name: 'Stats', useAsDefault: true }
])

export class SeedApp {
  constructor() {}
}
