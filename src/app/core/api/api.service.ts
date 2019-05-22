import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { config } from '../config';
// import { Tokens } from '../models/tokens';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  // private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) { }

  getUserTickets() {
    return this.http.get('assets/userdashboard.json');
  }

  createTickets(payload) {
    return this.http.post('/api/ticket/createTicket/', payload, { observe: 'response' }).pipe(map((response) => {
      console.log('response', response);
      if (response) {
        console.log('response', response);
        return response;
      }
    }));
  }

  registerUser(payload) {
    return this.http.post('/user/create/', payload, { observe: 'response' }).pipe(map((response) => {
      console.log('response', response);
      if (response) {
        console.log('response', response);
        return response;
      }
    }));
  }

  getOrderDetails() {
    return this.http.get('assets/orderdetails.json');
  }

  getUserDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.get('/user/username/' + user, {
      headers: {
        'Authorization': token,
      }
    });
  }

  updateUserDetails(userData) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.put('user/username/' + user, userData, {
      headers: {
        'Authorization': token,
      }
    });
  }

  getTicketDetails() {
    return this.http.get('assets/ticketdetails.json');
  }

  login(user: { userName: string, password: string }): Observable<any> {
    return this.http.post<any>(`/login`, user, { observe: 'response' })
      .pipe(
        // tap(tokens => console.log(tokens)),
        // mapTo(true),
        map((res) => res),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    this.doLogoutUser();
    // return this.http.post<any>(`${config.userMgmtUrl}/logout`, {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(
    //   tap(() => this.doLogoutUser()),
    //   mapTo(true),
    //   catchError(error => {
    //     alert(error.error);
    //     return of(false);
    //   }));
  }


  isLoggedIn() {
    return true;
    // return !!this.getJwtToken();
  }

  // refreshToken() {
  //   return this.http.post<any>(`${config.apiUrl}/refresh`, {
  //     'refreshToken': this.getRefreshToken()
  //   }).pipe(tap((tokens: Tokens) => {
  //     this.storeJwtToken(tokens.jwt);
  //   }));
  // }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    // return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    // localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    // localStorage.removeItem(this.REFRESH_TOKEN);
  }

}


