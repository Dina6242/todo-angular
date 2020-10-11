import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '../interfaces/auth-token';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private  http: HttpClient) {
  }

  register(credentials: Login): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${environment.apiUrl}auth/register`, credentials);
  }

  login(credentials: Login): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${environment.apiUrl}auth/login`, credentials);
  }
}
