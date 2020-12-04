import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.updateLoginState();
  }

  onLogin(): void{
    this.authService.login().subscribe(() => this.updateLoginState());
  }

  onLogout(): void{
    this.authService.logout();
    this.updateLoginState();
    this.router.navigate(['']);
  }

  updateLoginState(): void{
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
