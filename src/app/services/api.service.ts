import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';

import { IExpansion, ICountry, IShipping, ICard } from 'app/models/app.models';
import { AuthenticationService } from 'app/services/authentication.service';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService,
  ) { }

  /**
   * Return the Authorization headers with Token for authenticated the user
   * on the API
   */
  private _createAuthorizationHeader() {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + this.authentication.token
    });
    return headers;
  }

  /**
   * Get all expansions
   */
  public getExpansions(): Observable<IExpansion[]> {
    return this.http.get<IExpansion[]>(environment.apiRoute + 'expansions/',
      { headers: this._createAuthorizationHeader() });
  }

  /**
   * Get all countries
   */
  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.apiRoute + 'countries/',
      { headers: this._createAuthorizationHeader() });
  }

  /**
   * Get all shippings
   */
  public getShippings(): Observable<IShipping[]> {
    return this.http.get<IShipping[]>(environment.apiRoute + 'shippings/',
      { headers: this._createAuthorizationHeader() });
  }

  /**
   * Get shipping detail
   */
  public getShipping(id_shipping: number): Observable<IShipping> {
    return this.http.get<IShipping>(environment.apiRoute + 'shippings/detail/'+id_shipping,
      { headers: this._createAuthorizationHeader() });
  }

  /**
   * Save shipping
   */
  public saveShipping(shipping: IShipping): Observable<any> {
    return this.http.post(environment.apiRoute + 'shippings/', shipping,
      { headers: this._createAuthorizationHeader() });
  }

  /**
   * Save Cards
   */
  public saveCards(cards: ICard[]): Observable<any> {
    return this.http.post(environment.apiRoute + 'cards/', cards,
      { headers: this._createAuthorizationHeader() });
  }

}
