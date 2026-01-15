import { Component, inject } from '@angular/core';
import { ANALYTICS } from '../../analytics/analytics.token';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export class DashboardComponent {
  private analytics = inject(ANALYTICS);

  track(): void {
    this.analytics.trackAnalytics();
  }
}
