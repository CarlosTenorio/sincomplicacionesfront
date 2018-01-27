import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http'
import { environment } from 'environments/environment';

import { Observable } from 'rxjs/Observable';

import * as Models from 'app/models/app.models';
import { CookiesService } from 'app/services/cookies.service';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(
    private http: Http,
    private cookiesService: CookiesService
  ) {
    this.token = this.cookiesService.getCookie("auth")
  }

  /**
   * Login successful if there's a token in the response
   */
  login(username: string, password: string): Observable<boolean> {
    return this.http.post(environment.apiRoute + 'api-token-auth/',
      { "username": username, "password": password })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          this.cookiesService.setCookie("auth", token, 30);
          return true;
        } else {
          return false;
        }
      });
  }

  /**
   * Clear token remove user from local storage to log user out
   */
  logout(): void {
    this.token = null;
    this.cookiesService.deleteCookie('auth');
  }
}
