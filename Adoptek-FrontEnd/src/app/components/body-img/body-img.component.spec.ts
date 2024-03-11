import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyImgComponent } from './body-img.component';

describe('BodyImgComponent', () => {
  let component: BodyImgComponent;
  let fixture: ComponentFixture<BodyImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyImgComponent]
    });
    fixture = TestBed.createComponent(BodyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
