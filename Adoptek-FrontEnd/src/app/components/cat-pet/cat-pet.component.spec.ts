import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPETComponent } from './cat-pet.component';

describe('CatPETComponent', () => {
  let component: CatPETComponent;
  let fixture: ComponentFixture<CatPETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatPETComponent]
    });
    fixture = TestBed.createComponent(CatPETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
