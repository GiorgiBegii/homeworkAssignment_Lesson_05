import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CounterService } from './services/counter-service';
import { ANALYTICS } from './analytics/analytics.token';
import { analyticsFactory } from './analytics/analytics.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    CounterService,
    {
      provide: ANALYTICS,
      useFactory: analyticsFactory
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
