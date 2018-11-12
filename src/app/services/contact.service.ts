import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //Header de las Peticiones Http
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  sendMessage(contactMessage: Contact): Observable<Contact> {
    const urlApi = "http://localhost:3000/contact";

    return this.http.post<Contact>(urlApi, JSON.stringify(contactMessage), { headers: this.headers });
  }
}
