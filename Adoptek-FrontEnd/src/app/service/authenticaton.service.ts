import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEntityLogin } from '../domain/user-entity-login';
import { Observable } from 'rxjs';
import { AuthResponse } from '../domain/auth-response';
import { UserEntity } from '../domain/user-entity';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatonService {
  private readonly URL_BASE = environment.api+"/auth/";

  constructor(private _http : HttpClient) {}

  login(UserEntity: UserEntityLogin) : Observable<AuthResponse>{
    console.log("login");
    
    return this._http.post<AuthResponse>(this.URL_BASE+'authenticate', UserEntity)
  }

  register(UserEntity: UserEntity) : Observable<AuthResponse>{
    return this._http.post<AuthResponse>(this.URL_BASE+'register', UserEntity)
  }
}
