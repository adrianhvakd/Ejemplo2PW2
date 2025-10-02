import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './shared/user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejemplo2');
}
