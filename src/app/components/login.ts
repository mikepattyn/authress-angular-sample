import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginClient } from "@authress/login";

@Component({
  selector: "app-login",
  imports: [],
  template: `
    <button (click)="login()">login</button>
  `,
  styles: ``,
  standalone: true,
})
export class LoginComponent {
  constructor(private readonly loginClient: LoginClient, private router: Router) {}

  login() {
    this.loginClient.authenticate();
  }

  ngOnInit() {
    this.loginClient.ensureToken().then((token) => {
      if (token) {
        this.router.navigate(['/'])
      } 
    })
  }
}
