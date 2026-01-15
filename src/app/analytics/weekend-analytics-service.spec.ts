import { TestBed } from '@angular/core/testing';

import { WeekendAnalyticsService } from './weekend-analytics-service';

describe('WeekendAnalyticsService', () => {
  let service: WeekendAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekendAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
