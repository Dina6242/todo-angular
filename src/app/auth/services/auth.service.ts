import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private  router: Router) {
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


  authenticate(res: string): void {
    localStorage.setItem('token', res);
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
