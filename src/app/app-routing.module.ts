import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { Page404Component } from "./components/page404/page404.component";
import { LoginComponent } from "./components/user/login/login.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { CourseComponent } from "./components/course/course.component";
import { CategoryComponent } from "./components/category/category.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { DLessonsComponent } from "./components/admin/d-lessons/d-lessons.component";
import { CoursesComponent } from "./components/admin/course/courses/courses.component";
import { DHomeComponent } from "./components/admin/d-home/d-home.component";


const routes: Routes = [
  { path: "", component: HomeComponent, data: { depth: 1 } },
  { path: "categorias", component: CategoryComponent, data: { depth: 2 } },
  { path: "nosotros", component: AboutComponent, data: { depth: 3 } },
  { path: "contacto", component: ContactComponent, data: { depth: 4 } },
  { path: "cursos", component: CourseComponent, data: { depth: 5 } },
  { path: "ingresar", component: LoginComponent, data: { depth: 6 } },
  { path: "registrar", component: RegisterComponent, data: { depth: 7 } },
  { path: "user/profile", component: ProfileComponent, data: { depth: 8 } },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "", component: DHomeComponent },
      { path: "clases", component: DLessonsComponent },
      { path: "cursos", component: CoursesComponent },
      { path: "cursos/nuevo", component: DLessonsComponent },
    ]
  },
  { path: "**", component: Page404Component, data: { depth: 10 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
