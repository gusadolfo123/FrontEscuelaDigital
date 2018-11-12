import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../models/course";
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  constructor(private http: HttpClient) {}

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
}
