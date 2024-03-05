import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
const credintial = {
  username: 'henok',
  password: 321,
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:8094';
  private token: boolean = false;
  constructor(private httpClient: HttpClient) {}

  login(): Observable<boolean> {
    const headers: HttpHeaders = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credintial.username + ':' + credintial.password),
    });

    return this.httpClient
      .get<boolean>(this.baseUrl + '/login', { headers })
      .pipe(
        tap((res: boolean) => {
          this.token = res;
        })
      );
  }
  isLogin(): boolean {
    this.login();
    console.log(this.token);
    return this.token;
  }
  logout() {
    this.token = false;
  }
}
