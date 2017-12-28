import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getExpansion() {
    return this.http.get(environment.apiRoute + 'expansions/')
      .map((res: Response) => { res.json() });
  }

}
