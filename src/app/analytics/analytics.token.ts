import { InjectionToken } from '@angular/core';

export const ANALYTICS = new InjectionToken<{
  trackAnalytics(): void;
}>('ANALYTICS');
