import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { CookiesService } from 'app/services/cookies.service';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(
    private http: HttpClient,
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
      .pipe(map((token: string) => {
        if (token) {
          this.token = token;
          this.cookiesService.setCookie("auth", token, 30);
          return true;
        } else {
          return false;
        }
      }));
  }

  /**
   * Clear token remove user from local storage to log user out
   */
  logout(): void {
    this.token = null;
    this.cookiesService.deleteCookie('auth');
  }
}
