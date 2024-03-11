import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarPetComponent } from './search-bar-pet.component';

describe('SearchBarPetComponent', () => {
  let component: SearchBarPetComponent;
  let fixture: ComponentFixture<SearchBarPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarPetComponent]
    });
    fixture = TestBed.createComponent(SearchBarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
