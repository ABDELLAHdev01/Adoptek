import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPetComponent } from './put-pet.component';

describe('PutPetComponent', () => {
  let component: PutPetComponent;
  let fixture: ComponentFixture<PutPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutPetComponent]
    });
    fixture = TestBed.createComponent(PutPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
