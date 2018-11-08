import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { CoursesComponent } from './components/admin/course/courses/courses.component';
import { ListCoursesComponent } from './components/admin/course/list-courses/list-courses.component';
import { ModalComponent } from './components/admin/course/modal/modal.component';
import { TemaryComponent } from './components/course/temary/temary.component';
import { LessonsComponent } from './components/course/lessons/lessons.component';
import { DetailCourseComponent } from './components/course/detail-course/detail-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    Page404Component,
    HeroComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CoursesComponent,
    ListCoursesComponent,
    ModalComponent,
    TemaryComponent,
    LessonsComponent,
    DetailCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
