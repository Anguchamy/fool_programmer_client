import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import { JwtAuthToken } from './jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'http://localhost:8080/api/auth/';
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    //this.localStorageService.clear()
   }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAuthToken>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  getLoggedInUsername():String{
    return this.localStorageService.retrieve('username');
  }
  isAuthenticated():boolean {
    //console.log(this.localStorageService.retrieve('username'));
    return this.localStorageService.retrieve('username') != null;
  }

  logout(){
    this.localStorageService.clear();
  }
}