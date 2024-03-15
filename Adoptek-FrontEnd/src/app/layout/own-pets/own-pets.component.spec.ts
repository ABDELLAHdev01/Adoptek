import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPetsComponent } from './own-pets.component';

describe('OwnPetsComponent', () => {
  let component: OwnPetsComponent;
  let fixture: ComponentFixture<OwnPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnPetsComponent]
    });
    fixture = TestBed.createComponent(OwnPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
