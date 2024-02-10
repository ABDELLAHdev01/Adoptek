import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticelsCardsComponent } from './articels-cards.component';

describe('ArticelsCardsComponent', () => {
  let component: ArticelsCardsComponent;
  let fixture: ComponentFixture<ArticelsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticelsCardsComponent]
    });
    fixture = TestBed.createComponent(ArticelsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
