import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPetsComponent } from './dog-pets.component';

describe('DogPetsComponent', () => {
  let component: DogPetsComponent;
  let fixture: ComponentFixture<DogPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogPetsComponent]
    });
    fixture = TestBed.createComponent(DogPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
