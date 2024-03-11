import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetcardsComponent } from './petcards.component';

describe('PetcardsComponent', () => {
  let component: PetcardsComponent;
  let fixture: ComponentFixture<PetcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetcardsComponent]
    });
    fixture = TestBed.createComponent(PetcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
