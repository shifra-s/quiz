import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const ENDPOINTS = {
  LOGIN: 'login'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken: string;
  private USER_TOKEN: string = 'jwt';

  constructor(private httpClient: HttpClient) { }

  login(u): Observable<Object> {
    return this.httpClient.post(environment.serverUrl + ENDPOINTS.LOGIN, u).pipe(
      catchError((errorRes) => {
        window.localStorage.removeItem(this.USER_TOKEN);
        console.log(errorRes);
        return of(undefined);
      }),
      map((tokenRes: string) => {
        if(tokenRes) {
        this.userToken = tokenRes;
        window.localStorage.setItem(this.USER_TOKEN, tokenRes);
        console.log(tokenRes);
        return tokenRes;
        }
      })
    );
  }

  getToken(): string {
    return window.localStorage.getItem(this.USER_TOKEN);
  }

  isLogged() {
    return this.getToken() != null;
  }
}