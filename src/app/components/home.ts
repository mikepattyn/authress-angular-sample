import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginClient } from '@authress/login';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <button (click)="logout()">logout</button>
  `,
  styles: ``,
  standalone: true,
})
export class HomeComponent {
  constructor(private readonly loginClient: LoginClient) {

  }
  logout() {
    this.loginClient.logout(window.location.origin);
  }
}
