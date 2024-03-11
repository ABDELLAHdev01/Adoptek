import { TestBed } from '@angular/core/testing';

import { CheckJwtValidityService } from './check-jwt-validity.service';

describe('CheckJwtValidityService', () => {
  let service: CheckJwtValidityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckJwtValidityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
