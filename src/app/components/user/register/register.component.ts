import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import { DocumentTypeService } from "src/app/services/document-type.service";
import { DocumentType } from "../../../models/document-type";
import { RolService } from "src/app/services/rol.service";
import { Rol } from "src/app/models/rol";
import { Alert } from "src/app/models/alert";
import { isNullOrUndefined } from "util";
import { Router } from "@angular/router";
import { Auth } from "src/app/models/auth";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public isError = false;
  alerts: Alert[];
  alert: Alert;
  messages: string[] = [];

  user: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    documentNumber: "",
    photo: "",
    password: "",
    rol_id: "",
    document_type_id: ""
  };

  documentTypes: DocumentType[];
  rols: Rol[];

  constructor(
    private auth: AuthService,
    private docType: DocumentTypeService,
    private rol: RolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.docType.getAllDocumentType().subscribe((data: DocumentType[]) => {
      this.documentTypes = data;
    });

    this.rol.getAllRols().subscribe((data: Rol[]) => {
      this.rols = data;
    });
  }

  onRegister(form: NgForm) {
    this.messages = [];
    if (form.valid) {
      this.auth.registerUser(this.user).subscribe(
        (data: User) => {
          // una ves registrado se genera el token de autenticacion
          let authObj: Auth = {
            email: this.user.email,
            password: this.user.password
          };

          this.auth.loginUser(authObj).subscribe(response => {
            this.auth.setToken(response);
          });

          this.auth.setUser(data);

          //location.reload();
          //redirigo a profile
          //this.router.navigate(["/user/profile"]);
          window.location.replace("http://localhost:4200/dashboard");
        },
        response => {
          if (!isNullOrUndefined(response.error)) {
            for (const field in response.error) {
              const error = response.error[field];
              this.messages.push(field + ": " + error);
            }
            this.onIsError(this.messages);
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
