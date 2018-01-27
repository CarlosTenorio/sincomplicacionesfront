import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Models from 'app/models/app.models';
import { AuthenticationService } from 'app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit() { }

  login() {
    this.loading = true;
    this.authentication.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/list']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
        }
        this.loading = false;
      });
  }
}
