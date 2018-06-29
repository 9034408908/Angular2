import { TestBed, inject } from '@angular/core/testing';

import { EmployserviceService } from './employservice.service';

describe('EmployserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployserviceService]
    });
  });

  it('should be created', inject([EmployserviceService], (service: EmployserviceService) => {
    expect(service).toBeTruthy();
  }));
});
