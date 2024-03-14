import { TestBed } from '@angular/core/testing';

import { JwthelperInterceptor } from './jwthelper.interceptor';

describe('JwthelperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwthelperInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwthelperInterceptor = TestBed.inject(JwthelperInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
