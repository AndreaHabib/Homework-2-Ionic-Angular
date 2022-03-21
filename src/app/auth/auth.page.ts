import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private username = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onUserName($event) {
    this.username = $event.target.value;
  }

  onLogin() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.username),
      },
    };
    this.authService.login();
    this.router.navigate(['/success'], navigationExtras);
  }
}
