import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { NgForm } from "@angular/forms";
import { GlobalStatesService } from "./services/global-states.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  title = "EscuelaDigital";
  isLogged: boolean = false;
  public isNavbar = false;

  constructor(private authService: AuthService, private globals: GlobalStatesService) {
    this.onCheckUser();
  }

  onCheckUser(): void {
    if (
      this.authService.getCurrentUser() == null ||
      this.authService.getToken() == null
    ) {
      this.isLogged = false;
      this.globals.setStateSidebar(false);
    } else {
      this.isLogged = true;
      this.globals.setStateSidebar(true);
    }
  }
}
