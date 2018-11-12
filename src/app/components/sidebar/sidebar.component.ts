import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalStatesService } from 'src/app/services/global-states.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userProfile: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    documentNumber: "",
    photo: "",
    rol_id: "",
    document_type_id: ""
  };

  constructor(private serv: AuthService, private globals: GlobalStatesService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userProfile = this.serv.getCurrentUser()[0];
  }

}
