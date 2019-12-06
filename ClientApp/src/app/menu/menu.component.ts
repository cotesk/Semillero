import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService, private location: Location) { }
  public app_name = 'Books Store';
  public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logoutUser();
    location.reload();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
