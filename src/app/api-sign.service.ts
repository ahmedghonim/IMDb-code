import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSignService {
  curantUser = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.curantUserToken();
    }
  }

  curantUserToken() {
    let token: any = localStorage.getItem('userToken');
    this.curantUser.next(jwtDecode(token));
    this.login(this.curantUser);
  }

  login(loginData: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      loginData
    );
  }
  signUp(signup: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      signup
    );
  }
  logout() {
    localStorage.removeItem('userToken');
    this.curantUser.next(null);
    this._Router.navigate(['/login']);
  }
}
