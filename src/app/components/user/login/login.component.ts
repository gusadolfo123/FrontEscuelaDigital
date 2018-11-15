import { Component, OnInit } from "@angular/core";
import { Alert } from "src/app/models/alert";
import { NgModel } from "@angular/forms";
import { Auth } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { isNullOrUndefined } from "util";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user";
import { Location } from "@angular/common";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public isError = false;
  alerts: Alert[];
  alert: Alert;
  messages: string[] = [];

  user: Auth = {
    email: "",
    password: ""
  };

  constructor(private auth: AuthService, private router: Router, private location: Location) { }

  ngOnInit() { }

  onLogin(form: NgForm) {
    this.messages = [];
    if (form.valid) {
      this.auth.loginUser(this.user).subscribe(
        token => {
          if (token != null && !isNullOrUndefined(token) && token != "") {
            this.auth.setToken(token);
            this.auth
              .getUserByIdEmail(this.user.email)
              .subscribe((user: User) => {
                this.auth.setUser(user);

                if (user.rol.Description == 'Teacher') {
                  window.location.replace("http://localhost:4200/dashboard");
                } else {
                  //this.router.navigate(["/user/profile"]);
                  window.location.replace("http://localhost:4200/");
                }
                //location.reload();
                this.isError = false;
              });
          } else {
            this.messages.push(`Error iniciando sesion, intente nuevamente`);
            this.onIsError(this.messages);
          }
        },
        response => {
          if (response.status == 404) {
            this.messages.push(`Error iniciando sesion, intente nuevamente`);
            this.onIsError(this.messages);
          } else {
            if (!isNullOrUndefined(response.error)) {
              for (const field in response.error) {
                const error = response.error[field];
                this.messages.push(field + ": " + error);
              }
              this.onIsError(this.messages);
            }
          }
        }
      );
    } else {
      if (form.form.status == "INVALID") {
        for (const field in form.form.controls) {
          const control = form.form.get(field); // 'control' is a FormControl

          if (!isNullOrUndefined(control.errors)) {
            if (control.errors.required)
              this.messages.push(`El campo ${field} es obligatorio`);
            if (control.errors.minlength)
              this.messages.push(
                `El campo ${field} debe tener minimo 8 caracteres`
              );
          }
        }
      }
      this.onIsError(this.messages);
    }
  }

  onIsError(messages: string[]): void {
    this.isError = true;
    this.alert = { type: "danger", messages: messages };
    setTimeout(() => {
      this.isError = false;
    }, 8000);
  }
}
