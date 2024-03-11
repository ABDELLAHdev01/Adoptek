import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAnimalComponent } from './about-animal.component';

describe('AboutAnimalComponent', () => {
  let component: AboutAnimalComponent;
  let fixture: ComponentFixture<AboutAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAnimalComponent]
    });
    fixture = TestBed.createComponent(AboutAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
