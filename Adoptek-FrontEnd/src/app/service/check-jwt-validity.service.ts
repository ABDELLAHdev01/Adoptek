import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CheckJwtValidityService {
  private readonly URL_BASE = environment.api + '/auth/';

  constructor(private _http: HttpClient) {}

  checkJwtValidity(token: string): Observable<boolean> {
    return this._http.get<boolean>(this.URL_BASE + `checkJwtValidity/${token}`);
  }
}
