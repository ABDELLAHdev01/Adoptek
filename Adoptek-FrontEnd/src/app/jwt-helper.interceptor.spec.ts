import { TestBed } from '@angular/core/testing';

import { JwtHelperInterceptor } from './jwt-helper.interceptor';

describe('JwtHelperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtHelperInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtHelperInterceptor = TestBed.inject(JwtHelperInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
