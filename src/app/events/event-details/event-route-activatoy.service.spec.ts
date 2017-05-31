import { TestBed, inject } from '@angular/core/testing';

import { EventRouteActivatoyService } from './event-route-activatoy.service';

describe('EventRouteActivatoyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivatoyService]
    });
  });

  it('should be created', inject([EventRouteActivatoyService], (service: EventRouteActivatoyService) => {
    expect(service).toBeTruthy();
  }));
});
