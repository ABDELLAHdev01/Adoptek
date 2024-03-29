import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntityLogin } from '../domain/user-entity-login';
import { Observable } from 'rxjs';
import { AuthResponse } from '../domain/auth-response';
import { UserEntity } from '../domain/user-entity';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatonService {
  private readonly URL_BASE = environment.api + '/auth/';

  constructor(private _http: HttpClient) {}

  login(UserEntity: UserEntityLogin): Observable<AuthResponse> {
    console.log('login');

    return this._http.post<AuthResponse>(
      this.URL_BASE + 'authenticate',
      UserEntity
    );
  }

  register(UserEntity: UserEntity): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(
      this.URL_BASE + 'register',
      UserEntity
    );
  }

  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token == null) {
      throw new Error('No token found');
    }
    return this._http.get<any>(this.URL_BASE + 'getUserInformations/' + token);
  }

  getAllUsers(): Observable<any> {
    return this._http.get<any>('http://localhost:8989/api/v1/getAllUsers');
  }

  promoteUserToAdmin(email: string): Observable<any> {
    return this._http.post<any>(
      'http://localhost:8989/api/v1/promoteUser/' + email,
      null
    );
  }
}
