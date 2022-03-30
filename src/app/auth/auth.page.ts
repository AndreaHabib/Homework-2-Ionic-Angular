import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private username = '';
  isLoading = false;
  isLogin = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onUserName($event) {
    this.username = $event.target.value;
  }

  onLogin() {
    this.isLoading = true;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        username: JSON.stringify(this.username),
      },
    };
    this.authService.login();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/success'], navigationExtras);
    }, 1500);
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      // Send a request to login servers
    } else {
      // Send a request to signup servers
    }
  }
}
