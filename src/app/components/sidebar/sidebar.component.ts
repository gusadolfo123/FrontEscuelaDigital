import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { Course } from 'src/app/models/course';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isNavbarCollapsed: boolean = false;
  courses: Course[] = [{
    id: "",
    Title: "",
    UrlImage: "",
    Description: "",
    created_at: "",
    students: [{
      id: "",
      Description: "",
      BirthDate: "",
      user_id: ""
    }],
    cnt: 0
  }];

  userProfile: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    documentNumber: "",
    photo: "",
    rol_id: "",
    document_type_id: ""
  };

  constructor(private authService: AuthService,
    private teacherService: TeacherService,
    private globals: GlobalStatesService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getAllCoursesByCurrentUser();
  }

  getCurrentUser() {
    this.userProfile = this.authService.getCurrentUser();
  }

  getAllCoursesByCurrentUser() {
    this.teacherService.getCoursesByUser(this.userProfile).subscribe(data => {
      if (!isNullOrUndefined(data))
        this.courses = data.courses;
    });
  }

  onLogout(): void {
    this.authService.logoutUser();
  }
}
