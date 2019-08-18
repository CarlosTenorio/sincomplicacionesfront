import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from 'app/services';

import { finalize } from 'rxjs/operators';

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

  login(loginForm: NgForm) {
    if (loginForm.valid && !this.loading) {
      this.loading = true;
      this.authentication.login(this.model.username, this.model.password)
        .pipe(finalize(() => { this.loading = false }))
        .subscribe((result) => {
          if (result)
            this.router.navigate(['shippings']);
          else
            this.error = 'Username or password is incorrect';
          this.loading = false;
        }, (error) => this.error = error);
    }
  }
}
