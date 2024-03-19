import { TestBed } from '@angular/core/testing';

import { ToasterSService } from './toaster-s.service';

describe('ToasterSService', () => {
  let service: ToasterSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
