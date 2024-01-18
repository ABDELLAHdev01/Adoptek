import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsThreeCardComponent } from './pets-three-card.component';

describe('PetsThreeCardComponent', () => {
  let component: PetsThreeCardComponent;
  let fixture: ComponentFixture<PetsThreeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsThreeCardComponent]
    });
    fixture = TestBed.createComponent(PetsThreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
