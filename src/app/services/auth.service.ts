import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { User } from "../models/user";
import { Auth } from "../models/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Header de las Peticiones Http
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    const uriApi = "http://localhost:3000/users";
    return this.http.post<User>(uriApi, { user }).pipe(map(data => data));
  }

  loginUser(userAuth: Auth) {
    const uriApi = "http://localhost:3000/user_token";

    return this.http
      .post<{ jwt: string }>(
        uriApi,
        { auth: userAuth },
        { headers: this.headers }
      )
      .pipe(map(data => data.jwt));
  }

  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }

  getUserByIdEmail(email: string): Observable<User> {
    const uriApi = "http://localhost:3000/users?email=" + email;
    return this.http.get(uriApi);
  }

  setUser(user: User): void {
    //guardar usuario en el localstorage
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getCurrentUser(): User {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  setToken(token): void {
    //guardar token en el localstorage
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
}
