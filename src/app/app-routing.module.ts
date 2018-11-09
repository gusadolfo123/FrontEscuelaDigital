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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cursos", component: CourseComponent },
  { path: "categorias", component: CategoryComponent },
  { path: "nosotros", component: AboutComponent },
  { path: "contacto", component: ContactComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/profile", component: ProfileComponent },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
