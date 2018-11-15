import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';
import { Student } from 'src/app/models/student';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  user: User;
  courses: Course[];

  constructor(private teacherServ: TeacherService,
    private authServ: AuthService,
    private courseServ: CourseService) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.user = this.authServ.getCurrentUser();
    this.teacherServ.getCoursesByUser(this.user).subscribe((data) => {

      if (!isNullOrUndefined(data)) {
        this.courses = data.courses;
        for (const iterator of this.courses) {
          this.courseServ.getStudentsByCourse(iterator.id).subscribe((data: Student[]) => {
            iterator.students = data;
            iterator.cnt = data.length;
          });
        }
      }

    });
  }

}
