import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private sub: { [key: string]: Subscription } = {};

  title = 'shop';

  constructor(private titleService: Title, private router: Router) { }

  ngOnInit(): void {
    this.setPageTitles();
  }

  ngOnDestroy(): void {
    this.sub.navigationEnd.unsubscribe();
  }


  onActivate($event: any, routerOutlet: RouterOutlet): void {
    // console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
    // console.log('Deactivated Component', $event, routerOutlet);
  }

  private setPageTitles(): void {
    this.sub.navigationEnd = this.router.events
      .pipe(

        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
        data => this.titleService.setTitle(data.title)
      );
  }
}
