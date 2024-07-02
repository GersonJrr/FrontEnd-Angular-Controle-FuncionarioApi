import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importe Router e NavigationEnd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularEstrutura';
  showNavbar = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        this.showNavbar = !(currentRoute?.data['hideNavbar']);
      }
    });
  }
}
