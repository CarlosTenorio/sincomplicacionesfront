import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http'
import { environment } from 'environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as Models from 'app/models/app.models';
import { AuthenticationService } from 'app/services/authentication.service';

@Injectable()
export class ApiService {

  private username: string = 'root';
  private password: string = 'admin1234';

  constructor(
    private http: Http,
    private authentication: AuthenticationService,
  ) { }

  /**
   * Return the Authorization headers with Token for authenticated the user
   * on the API
   */
  createAuthorizationHeader() {
    var headers = new Headers({
      'Authorization': 'Token ' + this.authentication.token
    });
    return headers;
  }

  /**
   * Get all expansions
   */
  getExpansions(): Observable<Models.IExpansion[]> {
    return this.http.get(environment.apiRoute + 'expansions/',
      { headers: this.createAuthorizationHeader() })
      .map((response: Response) => response.json());
  }

  /**
   * Get all countries
   */
  getCountries(): Observable<Models.ICountry[]> {
    return this.http.get(environment.apiRoute + 'countries/',
      { headers: this.createAuthorizationHeader() })
      .map((response: Response) => response.json());
  }


  /**
   * Get all shippings
   */
  getShippings(): Observable<Models.IShipping[]> {
    return this.http.get(environment.apiRoute + 'shippings/',
      { headers: this.createAuthorizationHeader() })
      .map((response: Response) => response.json());
  }

  /**
   * Save shipping
   */
  saveShipping(shipping: Models.IShipping): Observable<any> {
    return this.http.post(environment.apiRoute + 'shippings/', shipping,
      { headers: this.createAuthorizationHeader() })
      .map((response: Response) => response.json());
  }

  /**
   * Save Cards
   */
  saveCards(cards: Models.ICard[]): Observable<any> {
    return this.http.post(environment.apiRoute + 'cards/', cards,
      { headers: this.createAuthorizationHeader() })
      .map((response: Response) => response.json());
  }


}
