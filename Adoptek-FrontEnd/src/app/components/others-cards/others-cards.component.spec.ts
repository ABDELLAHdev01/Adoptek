import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersCardsComponent } from './others-cards.component';

describe('OthersCardsComponent', () => {
  let component: OthersCardsComponent;
  let fixture: ComponentFixture<OthersCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersCardsComponent]
    });
    fixture = TestBed.createComponent(OthersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
