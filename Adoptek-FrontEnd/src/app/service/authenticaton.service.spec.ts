import { TestBed } from '@angular/core/testing';

import { AuthenticatonService } from './authenticaton.service';

describe('AuthenticatonService', () => {
  let service: AuthenticatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
