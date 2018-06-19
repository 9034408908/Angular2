import { TestBed, inject } from '@angular/core/testing';

import { RectangaleserviceService } from './rectangaleservice.service';

describe('RectangaleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RectangaleserviceService]
    });
  });

  it('should be created', inject([RectangaleserviceService], (service: RectangaleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
