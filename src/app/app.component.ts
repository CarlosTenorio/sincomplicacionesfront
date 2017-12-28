import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magic Manager';

  sidenavOpened = true;

  constructor() { }

  switchSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
