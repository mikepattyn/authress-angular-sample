import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthressModule } from '@mikepattyn/authress-angular';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: ``,
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class AppComponent {

}
