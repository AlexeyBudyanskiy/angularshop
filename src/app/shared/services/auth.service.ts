import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }

  isLoggedIn(): boolean{
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }
}
