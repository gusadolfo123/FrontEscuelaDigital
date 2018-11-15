import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { GlobalStatesService } from "./services/global-states.service";
import { trigger, transition, group, query, style, animate, state } from "@angular/animations";
import { User } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger('divAnimation', [
      state('void', style({
        transform: 'translateX(+50%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 3 => 4, 1 => 3, 1 => 4, 2 => 4, 1 => 5, 1 => 6, 1 => 7, 1 => 8, 1 => 9, 2 => 5, 2 => 6, 2 => 7, 2 => 8, 2 => 9, 6 => 7, 3 => 6', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(30%)', opacity: 0 })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-30%)', opacity: 0 })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 0 }))),
        ]),
      ]),
      transition('4 => 3, 3 => 2, 2 => 1, 4 => 2, 4 => 1, 3 => 1, 7 => 6', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(-30%)', opacity: 0 })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(30%)', opacity: 0 })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 0 }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent {

  title = "EscuelaDigital";
  isLogged: boolean = false;
  user: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    documentNumber: "",
    photo: "",
    rol_id: "",
    document_type_id: "",
    rol: {}
  };
  public isNavbar = false;

  constructor(private authService: AuthService, private globals: GlobalStatesService) {
    this.onCheckUser();
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
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
      this.user = this.authService.getCurrentUser();
    }
  }
}
