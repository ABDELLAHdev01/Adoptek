import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPetCardsComponent } from './own-pet-cards.component';

describe('OwnPetCardsComponent', () => {
  let component: OwnPetCardsComponent;
  let fixture: ComponentFixture<OwnPetCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnPetCardsComponent]
    });
    fixture = TestBed.createComponent(OwnPetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
