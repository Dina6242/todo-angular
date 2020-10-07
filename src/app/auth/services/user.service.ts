import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '../interfaces/auth-token';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private  http: HttpClient, private  router: Router) {
  }

  register(credentials: Login): void {
    this.http.post<AuthToken>(`${environment.apiUrl}auth/register`, credentials).subscribe(res => {
      this.authenticate(res.access_token);
    });
  }

  login(credentials: Login): void {
    this.http.post<AuthToken>(`${environment.apiUrl}auth/login`, credentials).subscribe(res => {
      this.authenticate(res.access_token);
    });
  }

  authenticate(res: string): void {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }
}
