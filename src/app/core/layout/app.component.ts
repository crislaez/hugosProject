import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template:`
    <div>
      <app-header [currentSection]="(currentSection$ | async)"></app-header>

      <router-outlet id="main"></router-outlet>

      <app-footer></app-footer>
      <!-- <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> -->
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentSection$: Observable<string> = this.router.events.pipe(
    filter((event: any) => event instanceof NavigationStart),
    map((event: NavigationEnd) => {
      const { url = ''} = event || {}
      let route = url?.split('/')[1];
      // console.log(route)
      return route || 'inicio';
    })
  );


  constructor(private router: Router) { }


  ngOnInit() {
    AOS.init();
  }


}
