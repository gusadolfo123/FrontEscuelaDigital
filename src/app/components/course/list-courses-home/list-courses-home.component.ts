import { Component, OnInit, Input } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { Course } from "src/app/models/course";
@Component({
  selector: "app-list-courses-home",
  templateUrl: "./list-courses-home.component.html",
  styleUrls: ["./list-courses-home.component.css"]
})
export class ListCoursesHomeComponent implements OnInit {
  @Input() public categoria: string;
  @Input() public busqueda: string;

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService
      .getAllCourses(this.categoria, this.busqueda)
      .subscribe((data: Course[]) => {
        this.courses = data;
      });
  }
}
