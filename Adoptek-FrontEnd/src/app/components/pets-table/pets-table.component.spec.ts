import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsTableComponent } from './pets-table.component';

describe('PetsTableComponent', () => {
  let component: PetsTableComponent;
  let fixture: ComponentFixture<PetsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsTableComponent]
    });
    fixture = TestBed.createComponent(PetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
