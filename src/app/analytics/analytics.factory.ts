import { AnalyticsService } from './analytics-service';
import { WeekendAnalyticsService } from './weekend-analytics-service';

export function analyticsFactory() {
  const day = new Date().getDay(); 
  // 0 = Sunday, 6 = Saturday

  if (day === 0 || day === 6) {
    return new WeekendAnalyticsService();
  }

  return new AnalyticsService();
}
