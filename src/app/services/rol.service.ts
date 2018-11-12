import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Rol } from "../models/rol";

@Injectable({
  providedIn: "root"
})
export class RolService {
  constructor(private http: HttpClient) {}

  getAllRols(): Observable<Rol[]> {
    const apiUri = "http://localhost:3000/rols";
    return this.http.get<Rol[]>(apiUri);
  }
}
