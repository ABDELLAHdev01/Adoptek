import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPageComponent } from './animal-page.component';

describe('AnimalPageComponent', () => {
  let component: AnimalPageComponent;
  let fixture: ComponentFixture<AnimalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalPageComponent]
    });
    fixture = TestBed.createComponent(AnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
