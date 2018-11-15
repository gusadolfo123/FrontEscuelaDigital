import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../models/course";
import { isNullOrUndefined } from "util";
import { map } from "rxjs/operators";
import { Student } from "../models/student";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  constructor(private http: HttpClient) { }


  getAllCourses(categoria?: string, busqueda?: string): Observable<Course[]> {
    let urlApi = "";
    if (!isNullOrUndefined(categoria) && !isNullOrUndefined(busqueda)) {
      urlApi =
        "http://localhost:3000/courses?categoria=" +
        categoria +
        "?busqueda=" +
        busqueda;
    } else {
      urlApi = "http://localhost:3000/courses";
    }

    return this.http.get<Course[]>(urlApi);
  }

  getCoursesByCategory(category: string) {
    const urlApi = "";
    return this.http.get<Course[]>(urlApi);
  }

  getCourseByName(name: string) {
    const urlApi = "";
    return this.http.get<Course[]>(urlApi);
  }

  getStudentsByCourse(course_id: string): Observable<Student[]> {
    const urlApi = "http://localhost:3000/courses/" + course_id;
    return this.http.get<Course>(urlApi).pipe(map(data => data.students));
  }

}
