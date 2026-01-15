import { Injectable } from '@angular/core';

@Injectable()
export class WeekendAnalyticsService {
  trackAnalytics(): void {
    console.log('Analytics is tracked for weekend');
  }
}
