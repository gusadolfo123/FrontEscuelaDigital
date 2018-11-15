import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-d-header',
  templateUrl: './d-header.component.html',
  styleUrls: ['./d-header.component.css']
})
export class DHeaderComponent implements OnInit {
  isLogged: boolean = false;
  isNavbarCollapsed = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.onCheckUser();
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
