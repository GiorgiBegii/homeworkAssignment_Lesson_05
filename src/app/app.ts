import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter-component/counter-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('homeworkAssignment_Lesson_05');
}
