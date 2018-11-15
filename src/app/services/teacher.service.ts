import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { Course } from '../models/course';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]> {
    const urlApi = "http://localhost:3000/teachers";
    return this.http.get<Teacher[]>(urlApi);
  }

  getCoursesByUser(user: User): Observable<any> {
    let urlApi = "";

    if (user.rol.Description == "Teacher")
      urlApi = "http://localhost:3000/teachers?user_id=" + user.id;

    if (user.rol.Description == "Student")
      urlApi = "http://localhost:3000/students?user_id=" + user.id;

    return this.http.get<any>(urlApi).pipe(map(data => data[0]));
  }
}
