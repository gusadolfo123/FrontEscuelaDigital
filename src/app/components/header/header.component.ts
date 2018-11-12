import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Rol } from "src/app/models/rol";
import { RolService } from "src/app/services/rol.service";
import { GlobalStatesService } from "src/app/services/global-states.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  isNavbarCollapsed = true;
  rols: Rol[];

  constructor(private authService: AuthService, private rolService: RolService, private globals: GlobalStatesService) { }

  showNavBar() {
    this.globals.setStateSidebar(!this.globals.getStateSidebar());
  }

  ngOnInit() {
    this.onCheckUser();
    this.loadRols();
  }

  loadRols(): void {
    this.rolService.getAllRols().subscribe((data: Rol[]) => {
      this.rols = data
    })

  }

  onCheckUser(): void {
    if (
      this.authService.getCurrentUser() == null ||
      this.authService.getToken() == null
    ) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  onLogout(): void {
    this.authService.logoutUser();
  }
}
