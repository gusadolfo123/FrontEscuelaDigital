import { Component, OnInit } from "@angular/core";
import { Alert } from "src/app/models/alert";
import { NgForm } from "@angular/forms";
import { Contact } from "src/app/models/contact";
import { ContactService } from "src/app/services/contact.service";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  public isError = false;
  alerts: Alert[];
  alert: Alert;
  messages: string[] = [];
  contact: Contact = {
    email: "",
    fullName: "",
    subject: "",
    content: ""
  }

  constructor(private contactServ: ContactService) { }

  ngOnInit() { }

  onSendEmail(form: NgForm) {
    this.messages = [];
    if (form.valid) {
      this.contactServ.sendMessage(this.contact).subscribe((data) => {
        this.messages.push("Correo Enviado Correctamente");
        this.onSendMessageOk(this.messages);
        form.reset();
      }, response => {
        if (!isNullOrUndefined(response.error)) {
          for (const field in response.error) {
            const error = response.error[field];
            this.messages.push(field + ": " + error);
          }
          this.onIsError(this.messages);
        }
      })
    } else {

      for (const field in form.form.controls) {

        const control = form.form.get(field); // 'control' is a FormControl

        if (!isNullOrUndefined(control.errors)) {

          if (control.errors.required)
            this.messages.push(`El campo ${field} es obligatorio`);
          if (control.errors.minlength)
            this.messages.push(
              `El campo ${field} debe tener minimo 4 caracteres`
            );
        }
      }
      this.onIsError(this.messages);
    }

  }

  onSendMessageOk(messages: string[]): void {
    this.isError = true;
    this.alert = { type: "success", messages: messages };
    setTimeout(() => {
      this.isError = false;
    }, 8000);
  }

  onIsError(messages: string[]): void {
    this.isError = true;
    this.alert = { type: "danger", messages: messages };
    setTimeout(() => {
      this.isError = false;
    }, 8000);
  }
}
