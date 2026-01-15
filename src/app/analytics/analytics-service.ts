import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {
  trackAnalytics(): void {
    console.log('Analytics is tracked');
  }
}
