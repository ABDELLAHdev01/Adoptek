import { TestBed } from '@angular/core/testing';

import { LocalStorgeService } from './local-storge.service';

describe('LocalStorgeService', () => {
  let service: LocalStorgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
