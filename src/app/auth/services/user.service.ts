import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '../interfaces/auth-token';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private  http: HttpClient, private authService: AuthService) {
  }

  register(credentials: Login): void {
    this.http.post<AuthToken>(`${environment.apiUrl}auth/register`, credentials).subscribe(res => {
      this.authService.authenticate(res.access_token);
    });
  }

  login(credentials: Login): void {
    this.http.post<AuthToken>(`${environment.apiUrl}auth/login`, credentials).subscribe(res => {
      this.authService.authenticate(res.access_token);
    });
  }
}
